import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_REQUEST } from "../reducers/user";


const Login = () => {
    const useInput = (initialState='')=>{
        const [val, setVal] = useState(initialState);
        const handleVal = e => {
            setVal(e.target.value);
        }
        return [val, handleVal];
    }
    const [username, handleUsername] = useInput('');
    const [password, handlePassword] = useInput('');

    const dispatch = useDispatch();
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type : LOGIN_REQUEST,
            data : {
                username,
                password,
            }
        })    
    },[username,password]);

    return (
        <div style={{border:"orange solid 5px", marginLeft:"20%", marginRight:"20%", padding:"20px 20px"}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username" style={{marginRight:'10px'}}>ID</label>
                    <input id='username' value={username} onChange={handleUsername}/>
                </p>
                <p>
                    <label htmlFor="password" style={{marginRight:'10px'}}>PW</label>
                    <input id='password' value={password} onChange={handlePassword}/>
                </p>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Login;