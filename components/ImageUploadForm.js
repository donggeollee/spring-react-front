import { useState } from "react"
import { useDispatch } from "react-redux";
import { CREATE_IMAGE_REQUEST } from '../reducers/image';


const ImageUploadForm = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fileUploadForm = document.getElementById('fileUploadForm');
        const formData = new FormData(fileUploadForm);
        formData.append('multipartFileList',image);
-
        dispatch({ 
            type : CREATE_IMAGE_REQUEST,
            data : formData
        }) 
    }

    return (
        <> 
            <form method="post" onSubmit={handleSubmit} id="fileUploadForm" encType="multipart/form-data">
                <input type='file' onChange={handleImage}/>
                <button type='submit'> 파일 업로드</button>
            </form>
        </>
    )
}

export default ImageUploadForm;