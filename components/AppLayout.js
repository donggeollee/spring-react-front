import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { LOAD_USER_REQUEST } from '../reducers/user'

const AppLayout = ({children}) => {

    const {isLoggedIn, user, authToken} =  useSelector(state=>state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        const JWT_TOKEN = localStorage.getItem('JWT_TOKEN');
        if( !user.username && JWT_TOKEN ){
            dispatch({
                type : LOAD_USER_REQUEST,
                data : JWT_TOKEN
            });
        }
    },[user, authToken])

    const handleLogout = ()=> {
        localStorage.setItem('JWT_TOKEN','');
        alert('success logout');
        window.location.href='/';
    }

    return (
        <div style={{margin:'20px'}}>
            <div>
                <span style={{padding:'5px'}}><Link href='/'><a>MAIN</a></Link></span>
                <span style={{padding:'5px'}}><Link href='/board'><a>BOARD</a></Link></span>
            {isLoggedIn
            ?
            <> 
                <span style={{padding:'5px'}}><Link href='/post'><a>POST</a></Link></span>
                <span style={{padding:'5px'}}><Link href='/myPage'><a>MY</a></Link></span>
                <span style={{padding:'5px'}}><button onClick={handleLogout}>LOGOUT</button></span>
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