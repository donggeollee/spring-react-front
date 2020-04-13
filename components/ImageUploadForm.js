import { useState } from "react"
import { useDispatch } from "react-redux";


const ImageUploadForm = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",image);
        console.log(formData);
        console.log(image);
        
        dispatch({
            type : CREATE_POST_IMAGE,
            data : image
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='file' onChange={handleImage}/>
                <button type='submit'> 이미지 업로드</button>
            </form>
        </>
    )
}

export default ImageUploadForm;