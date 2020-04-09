import { useSelector } from "react-redux";
import Post from './Post';


const Posts = () => {
    const { posts }= useSelector(state => state.post);

    return (
        <>
            {
                posts.map((post,index)=>(
                    <Post key={post.id} content={post.content} comments={post.content} />
                ))
            } 
        </>
    )
}

export default Posts;