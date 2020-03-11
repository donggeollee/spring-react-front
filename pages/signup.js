import SignupComponent from '../components/SignupComponent';
import router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Signup = () => {

    const { signupSuccess } = useSelector(state=>state.user);

    useEffect(()=>{
        if( signupSuccess ) {
            alert('signup success. please try login!');
            router.push('/');
        }
    },[signupSuccess])

    return (
        <div>
            <h1 style={{textAlign:'center'}}>SIGNUP PAGE</h1>
            <SignupComponent/>
        </div>
    )
}

export default Signup;