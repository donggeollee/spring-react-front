import Login from '../components/Login';
import { useSelector } from 'react-redux';
import Signup from '../components/SignupComponent';
import { useState } from 'react';

const LoginSuccess =
        <div style={{border:"orange solid 5px"
                    , marginLeft:"20%"
                    , marginRight:"20%"
                    , padding:"20px 20px"}}>
            <h2>로그인 완료!</h2>
        </div>

const Main = () => {

    const {isLoggedIn} = useSelector(state=>state.user);
    
    return (
        <div>
            <div style={{ marginLeft:"20%", marginRight:"20%", padding:"20px 20px"}}>
                <h1 style={{textAlign:'center'}}>MAIN PAGE</h1>
            </div>
            <div>
                {!isLoggedIn ? <Login/> : LoginSuccess}            
            </div>
        </div>
    )
}

export default Main;