import './Login.css'
import email_icon from "/src/assets/email_icon.png";
import user_icon from "/src/assets/user_icon.png";
import password_icon from "/src/assets/password_icon.png";
import { useState } from 'react';


const Login = () => {
    const[action,setAction]=useState("Login");
    return(
        <>
        <div className='container'>
            <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
            </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
            <img src={user_icon} alt=''></img>
            <input type='text' placeholder='Name'></input>
        </div>}
        <div className='input'>
            <img src={email_icon} alt=''></img>
            <input type='email' placeholder='Email Id'></input>
        </div>
        <div className='input'>
            <img src={password_icon} alt=''></img>
            <input type='password' placeholder='Passcode'></input>
        </div>
        </div>
        <center>
        <div className='forgot-password'>Forgot Password?<span>Click Here!</span></div>
        </center>

        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
        </>
        
    )
}
export default Login