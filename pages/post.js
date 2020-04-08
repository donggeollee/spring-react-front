import PostForm from '../components/PostForm';
import { useSelector } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post'

const Post = ()=>{

    const { posts }  = useSelector(state => state.post);

    return(
        <div>
            {
            <div>
                <PostForm/>
                <div>
                </div>
                
            </div>
            }
        </div>
    )
}

Post.getInitialProps = async (context) => {
    console.log("post getInitialProps 실행")
    context.store.dispatch({
        type : LOAD_POST_REQUEST,
    });
}

export default Post;