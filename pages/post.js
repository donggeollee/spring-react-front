import PostForm from '../components/PostForm';
import { useSelector } from 'react-redux';

const Post = ()=>{

    const {user}  = useSelector(state => state.user);

    return(
        <div>
            {
            <div>
                <PostForm/>
                
            </div>
            }
            
        </div>
    )
}

export default Post;