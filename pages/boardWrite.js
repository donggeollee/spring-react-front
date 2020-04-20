import FileUploadForm from "../components/FileUploadForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const boardWrite =  () => {

    const dispatch = useDispatch();
    const useInput = (initialState='') => {
        const [val, setVal] = useState(initialState);
        const handleVal = (e)=>{
            setVal(e.target.value);
        }
        return [val, handleVal];
    }
    const [title, handleTitle] = useInput('');
    const [content, handleContent] = useInput('');
    const { files } = useSelector(state => state.file); 

    const handleSubmit = () => {
        const boardInfo = {
            title,
            content,
            files
        };
        dispatch({
            type : CREATE_BOARD_REQUEST,
            data : boardInfo,
        })
        
        
        
    }

    return (
        <div>
            <p>글작성 페이지 </p>
            <div style={{border:'1px solid black'}}>
                <div>
                    <label htmlFor="title"></label>
                    <input id="title" type="text" value={title} onChange={handleTitle} placeholder="글제목을 입력해주세요"/>
                </div>
                <FileUploadForm/>
                <div>
                    <label htmlFor="content"></label>
                    <textarea rows="30" cols="100" id="content" value={content} onChange={handleContent}></textarea> 
                </div>
                <div>
                    <input type="button" onClick={handleSubmit} value="제출"/>
                </div>
            </div>        
        </div>
    )
}

export default boardWrite;