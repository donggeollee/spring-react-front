import { useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";
import {ADD_POST_REQUEST} from '../reducers/post';

const PostForm = () => {

    const useInput = (initialState = '') => {
        const [val, setVal]  = useState(initialState);
        const handleInput  = (e)=>{
            setVal(e.target.value);
        }
        return [val, handleInput];
    }

    
    const [content, handleChange] = useInput('');
    const dispatch = useDispatch();
    const { isPosting } = useSelector(state => state.post);
    const { user } = useSelector(state => state.user);


    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch({
            type : ADD_POST_REQUEST,
            data : {
                CONTENT : content,
                USERNAME : user.username
            }
        })
    },[content])
    return (
        <div>
            {
            isPosting
            ?
            '삽입중...'
            :
            <form onSubmit={handleSubmit}>
                <p>
                    <textarea cols='30' rows='10'  value={content} onChange={handleChange} />
                </p>
                <p>
                    <button type='submit'>submit</button>
                </p>
            </form>
            }
        </div>
    )

}

export default PostForm;