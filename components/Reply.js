
const Reply = ({replyId, nickname, reply}) => {

    return (
        <div key={replyId}>
            <p>
                <label htmlFor={`reply_${replyId}`} style={{border:'1px solid navy'}}>{nickname} :</label>
                <textarea id={`reply_${replyId}`} value={reply} disabled/>
            </p>
        </div>
    )
}

export default Reply;