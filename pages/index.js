import Login from '../components/Login';
import { useSelector } from 'react-redux';

const LoginSuccess =
        <div style={{border:"orange solid 5px"
                    , marginLeft:"20%"
                    , marginRight:"20%"
                    , padding:"20px 20px"}}>
            <h2>로그인 완료!</h2>
        </div>

const Main = ({id}) => {

    const {isLoggedIn, isLoggingIn} = useSelector(state=>state.user);
    const loggingInComponent = (
        <div style={{textAlign:'center'}}>
            <h1>로그인 중...</h1>
        </div>
    ) 

    return (
        <div>
            <div style={{ marginLeft:"20%", marginRight:"20%", padding:"20px 20px"}}>
                <h1 style={{textAlign:'center'}}>MAIN PAGE</h1>
            </div>
            <div>
                {!isLoggedIn 
                ? ((isLoggingIn&&loggingInComponent) || <Login/>)  
                : LoginSuccess}            
            </div>
        </div>
    )
}

export default Main;