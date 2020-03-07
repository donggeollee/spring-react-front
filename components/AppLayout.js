import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

const AppLayout = ({children}) => {

    const {isLoggedIn} =  useSelector(state=>state.user);

    return (
        <div style={{margin:'20px'}}>
            <div>
                <span style={{padding:'5px'}}><Link href='/'><a>MAIN</a></Link></span>
            {isLoggedIn
            ?
            <> 
                <span style={{padding:'5px'}}><Link href='/post'><a>POST</a></Link></span>
                <span style={{padding:'5px'}}><Link href='/myPage'><a>MY</a></Link></span>
            </>
            :
                <span style={{padding:'5px'}}><Link href='/signup'><a>REGIST</a></Link></span>
            }
            </div>
            <div> 
                {children}  
            </div> 
        </div>
    )
}


export default AppLayout;