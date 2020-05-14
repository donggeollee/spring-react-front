import { useSelector } from "react-redux";
import Post from './Post';


const Posts = () => {
    const { posts }= useSelector(state => state.post);


    // 그냥 post.id 만 쓰면 콘솔에 unique key 에러 나는 이유를 모르겠음
    return (
        <>
            {
            posts.map((post,index)=>{
                return (
                    <Post  key={post.id + 1} 
                           postId={post.id}  
                           content={post.content}  />
                )
            })
            } 
        </>
    )
}

export default Posts;