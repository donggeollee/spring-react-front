
const Comment = ({key, nickname, username, reply}) => {
    return (
        <div key={key}>
            <p>
                <label htmlFor={username} style={{border:'1px solid navy'}}>{nickname} :</label>
                <textarea id={username} value={reply}/>
            </p>
        </div>
    )
}

export default Comment;