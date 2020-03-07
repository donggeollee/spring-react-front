import { useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";

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

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch({
            type : ADD_POST_REQUEST,
            data : content,
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