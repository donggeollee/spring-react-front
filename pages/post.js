import PostForm from '../components/PostForm';
import { useSelector } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';
import Posts from '../components/Posts'

const Post = ({id}) => {

    const {isLoggedIn} = useSelector(state => state.user);
    return (
        <div>
            <h1>{id}</h1>
            { isLoggedIn && <div><PostForm/></div> }
            <div style={{border:"1px solid", margin:'10px', backgroundColor:'orange'}}>
                <Posts/>
            </div>
            <div> 
                
            </div>
        </div>
    )
}

Post.getInitialProps = async (context) => {
    console.log("excute getInitial Props!!!!__post.js");

    context.store.dispatch({
        type : LOAD_POST_REQUEST,
    })
    
    console.log("context.query.id : " + context.query.id);
    return {id : context.query.id};
}

export default Post;