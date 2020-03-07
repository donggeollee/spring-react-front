import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_SIGNUP_REQUEST,
         USER_USERNAME_DUPLICATE_CHECK_REQUEST } from '../reducers/user';

const Signup = () => {

    const useInput = useCallback((initialState='') => {
        const [value, setValue] = useState(initialState);
        const handleValue = (e)=>{
            setValue(e.target.value);
        }
        return [value, handleValue]; 
    })
    const [username, onChangeUsername] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');

    const { usernameChecked } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        console.log("usernameChecked : " + usernameChecked);
        if (!usernameChecked){ 
            alert('아이디 중복체크를 해주세요');
            return false;
        }

        dispatch({
            type : USER_SIGNUP_REQUEST,
            data :{
                username,
                password,
                nickname
            } 
        })
    },[username, password, nickname, usernameChecked]);

    const handleDuplicate = useCallback((e) =>{
        e.preventDefault();
        dispatch({
            type : USER_USERNAME_DUPLICATE_CHECK_REQUEST,
            data : username
        })
    },[username])

    return (
        <div style={{border:"orange solid 5px", marginLeft:"20%", marginRight:"20%", padding:"20px 20px"}}>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} style={{marginTop:'50px',marginLeft:'20px',}}>
                <p>
                    <label htmlFor='username'>ID : </label>
                    <input id='username' value={username} onChange={onChangeUsername} />
                    <button type="button" onClick={handleDuplicate}>ID CHECK</button>
                    
                    {
                     usernameChecked 
                    ? <span style={{color:'green', marginLeft:'10px'}}>available</span>
                    : <span style={{color:'red', marginLeft:'10px'}}>already exist</span>
                    }
                    
                </p>
                <p>
                    <label htmlFor='password'>PW : </label>
                    <input id='password' value={password} onChange={onChangePassword} />
                </p>
                <p>
                    <label htmlFor='nickname'>NICKNAME : </label>
                    <input id='nickname' value={nickname} onChange={onChangeNickname} />
                </p>
                <button type="submit">submit</button>
            </form>
        </div>
    )

}

export default Signup;

