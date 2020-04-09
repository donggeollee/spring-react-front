import Comment from './Comment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_COMMENT_REQUEST } from '../reducers/post';

const Post = ({key, content, comments}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);


    const handleInput = (initialState='') => {
        const [value, setValue] = useState(initialState);
        const handleVal = (e)=>{
            setValue(e.target.value);
        }
        return [value, handleVal];
    }
    const [commentValue, handleComment] = handleInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type : CREATE_COMMENT_REQUEST,
            data : {
                postId : key,
                userId : user.username,
                reply : commentValue,
            }
        })
    }
    return (
        <>
            <div key={key} style={{border:'1px solid' }}>
                <textarea defaultValue={content} disabled/>
                <div>
                    <p>
                        댓글
                    </p>
                    <p>
                        <form onSubmit={handleSubmit}>
                            <textarea value={commentValue} onChange={handleComment} />
                            <input type='submit' value='댓글제출'/>
                        </form>
                    </p>
                    <p>
                        {/*{comments.map((post, index)=>(
                            <Comment key={post.id} 
                                     nickname={post.nickname}
                                     username={post.username} 
                                     reply={post.reply} />
                        ))} */}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Post;