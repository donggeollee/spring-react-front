import {useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_FILE_REQUEST } from '../reducers/file';

// file 객체 임시 ID 만들기 
// UUID 생성 함수
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

const FileUploadForm = () => {

    const [uploadedList, setUploadedList] = useState([]);
    const [fileList,setFileList] = useState([]); 
    const dispatch = useDispatch();

    const UploadedFilenameListComponent = () => {
        return (
            <div style={{backgroundColor:"navy", color:"white"}}>
                <p style={{color:"red"}}>{`${uploadedList.length} 개 파일 업로드 완료`}</p>
                {
                    uploadedList.map((file, index)=>{
                        return(
                            <p key={index}>
                                <span> {file.name} </span> 
                                <span> [{file.size}] </span>
                                <span>
                                    <input type="button" onClick={handleUploadedFileDelete} id={file.id} value="삭제"/>
                                </span>
                            </p>
                        )
                    })
                }
            </div>
        )
    }

    const FilenameListComponent = () => {
        return (
            <div>
                {
                    fileList.map((file, index)=>{
                        return(
                            <p key={index}>
                                <span> { index + 1}. </span> 
                                <span> {file.name} </span> 
                                <span> [{file.size}] </span>
                                <span>
                                    <input type="button" onClick={handleFileDelete} id={file.id} value="삭제"/>
                                </span>
                            </p>
                        )
                    })
                }
            </div>
        )
    }

    const handleFileClick = () => {
        document.getElementById('file').click();
    }
    const handleFileDelete = useCallback(( e ) => {
        setFileList(fileList.filter(file => {
            return file.id !== e.target.id 
        }))
    }, [fileList])

    const handleUploadedFileDelete = useCallback(( e ) => {
        setUploadedList(uploadedList.filter(file => {
            return file.id !== e.target.id 
        }))
    }, [uploadedList])

    const handleInputFile = useCallback((e) => {
        let files = [];

        for ( let i = 0 ; i < e.target.files.length ; i++ ) {
            e.target.files[i].id = guid();
            files.push(e.target.files[i]);
        }
        
        setFileList(fileList.concat(files)); 

        // real file input reset
        document.getElementById("file").value = "";
    }, [fileList])

    const handleUpload = useCallback(() => {
        fileList.forEach((file,index)=>{
            const formData = new FormData();
            formData.append("fileList",file)
            dispatch({
                type : CREATE_FILE_REQUEST,
                data : formData
            })
        })
        setUploadedList(uploadedList.concat(fileList));
        setFileList([]);


    }, [fileList, uploadedList])

    const handleReset = useCallback(() => {
        setFileList([]);
    }, [fileList])

    return (
        <form>
            <div>
                <button id="fileUpload" type="button" onClick={handleFileClick}>첨부파일 업로드</button>
                <button type="button" onClick={handleUpload}>업로드하기</button>
                <button type="button" onClick={handleReset}>전체 삭제</button>
                <div>
                    <UploadedFilenameListComponent/>
                    <FilenameListComponent/>
                </div>
                <input id="file" onChange={handleInputFile} type="file" multiple hidden/>
            </div>
        </form>
    )


}

export default FileUploadForm;