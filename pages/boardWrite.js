import { useState } from "react";

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


const boardWrite =  () => {

    const [fileList,setFileList] = useState([]);

    const FilenameListComponent = () => {
        return (
            <div>
                {
                    fileList.map((file, index)=>{
                        return(
                            <p key={index}>
                                {file.name} [{file.size}]
                                <span><input type="button" onClick={handleFileDelete} id={file.id} value="삭제"/></span>
                            </p>
                        )
                    })
                }
            </div>
        )
    }

    const handleFileDelete = ( e ) => {
        setFileList(fileList.filter(file => {
            return file.id !== e.target.id
        }))
    }

    const handleInputFile = (e) => {
        e.target.files[0].id = guid();
        setFileList([ ...fileList, e.target.files[0] ]);
        // real file input reset
        document.getElementById("file").value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const handleFileClick = () => {
        document.getElementById('file').click();
    }

    return (
        <div>
            <p>글작성 페이지 </p>
            <div style={{border:'1px solid black'}}>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="title"></label>
                        <input id="title" type="text" placeholder="글제목을 입력해주세요"/>
                    </div>
                    <div>
                        <button id="fileUpload" type="button" onClick={handleFileClick}>첨부파일 업로드</button>
                        <FilenameListComponent/>
                        <input id="file" onChange={handleInputFile} type="file" hidden/>
                    </div>
                    <div>
                        <label htmlFor="content"></label>
                        <textarea id="content"></textarea>
                    </div>
                    <div>
                        <input type="button" value="제출"/>
                    </div>
                </form>
            </div>        
        </div>
    )
}

export default boardWrite;