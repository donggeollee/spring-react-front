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
        const formData = new FormData();
        formData.append("file",image);
        formData.append("username","username");
        formData.append("password","password");

        console.log("keys");
        for( var key in formData.keys ){
            console.log(key);
        }
        console.log("values");
        for( var value in formData.values ){
            console.log(value);
        }
        console.log(image);
        console.log(1111111111111); 
        return ;
        dispatch({
            type : CREATE_IMAGE_REQUEST,
            data : formData
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type='file' onChange={handleImage}/>
                <button type='submit'> 파일 업로드</button>
            </form>
        </>
    )
}

export default ImageUploadForm;