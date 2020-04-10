import { useSelector } from "react-redux";
import Post from './Post';


const Posts = () => {
    const { posts }= useSelector(state => state.post);

    return (
        <>
            {
            posts.map((post,index)=>{
                return (
                    < Post key={post.id} 
                           postId={post.id} 
                           content={post.content}  />
                )
            })
            } 
        </>
    )
}

export default Posts;