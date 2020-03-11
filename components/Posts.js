import { useSelector } from 'react-redux';
const Posts = () => {
    
    const {posts}  = useSelector(state => state.post);

    return (
        <>
        {posts.map(post=>{
            return (
            <div key={post.id} 
                 style={{border:"1px solid",
                         padding:"10px",
                          margin:'10px',
                           color:'black'}}>
                <div>
                    <p style={{border:"1px solid"}}>
                        id : {post.id}
                    </p>
                    <p>
                        content : {post.content}
                    </p>
                    <p>
                        userId : {post.userId}
                    </p>
                    <p>
                        생성일시 : {post.createdAt}
                    </p>
                    <p>
                        수정일시 : {post.updatedAt}
                    </p>
                </div>
            </div>
            )}
        )}
            
        </>
    )
}

export default Posts;