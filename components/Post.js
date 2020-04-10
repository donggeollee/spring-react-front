import Reply from './Reply';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_REPLY_REQUEST } from '../reducers/reply';

const Post = ({ postId, content}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    const {replys} = useSelector(state => state.reply);

    const handleInput = (initialState='') => {
        const [value, setValue] = useState(initialState); 
        const handleVal = (e)=>{
            setValue(e.target.value);
        }
        return [value, handleVal];
    }
    const [replyValue, handleReply] = handleInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type : CREATE_REPLY_REQUEST,
            data : {
                POST_ID : postId,
                USER_ID : user.username,
                REPLY : replyValue,
            }
        })
    }
    return (
        <>
            <div key={postId} style={{border:'1px solid'}}>
                <textarea cols='30' rows='10' value={content} disabled/>
                <div>
                    <p>
                        댓글
                    </p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <textarea cols='30' rows='2' value={replyValue} onChange={handleReply} />
                            <input type='submit' value='댓글제출'/>
                        </form>
                    </div>
                    <p>
                        {
                        replys.filter( reply => reply.postId === postId ) 
                              .map((reply)=>(
                                    <Reply key={reply.id} 
                                            replyId={reply.id}
                                            nickname={reply.nickname}
                                            reply={reply.reply}/>))
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Post;