import PostForm from '../components/PostForm';
import { LOAD_POST_REQUEST } from '../reducers/post'
import { LOAD_REPLY_REQUEST } from '../reducers/reply';
import Posts from '../components/Posts';

const Post = ()=>{

    return(
        <div>
            {
            <div>
                <PostForm/>
                <div>
                    <Posts/>
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
    context.store.dispatch({
        type : LOAD_REPLY_REQUEST,
    });
}

export default Post;