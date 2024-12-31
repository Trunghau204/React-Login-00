import React, { useState } from 'react'
import "./Login.css"
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosUnlock } from "react-icons/io";
const Login = ({ showPage, setShowPage, setChangePage }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div className="login-bg">
            <div className='icons-close'>
                <IoMdClose onClick={() => setShowPage(false)} />
            </div>
            <h1 className="header-login" > Login</h1>
            <div className="form-login">
                <form>
                    <div className="input-group">
                        <input type="email" id="email" name="email" required placeholder='Enter your email' />
                        <MdEmail className='icons' />
                    </div>
                    <div className="input-group">
                        <input type={showPassword ? "text" : "password"} id="password" name="password" required placeholder='Password' />
                        {showPassword ? <IoIosUnlock className='icons' onClick={handleShowPassword} /> : <MdLock className='icons' onClick={handleShowPassword} />}
                    </div>
                    <div className="checkbox-group">
                        <div className='question'>
                            <input type="checkbox" id="remember-me" name="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="#" className="forget-password">Forget Password?</a>
                    </div>
                    <button className="btn-login">Login</button>
                </form>
            </div>
            <div className="register-group">
                <p className="question-register">Don’t have an account?</p>
                <a href="#" className="register-login" onClick={(e) => {
                    e.preventDefault();
                    setChangePage('register'); // Chuyển sang giao diện Register
                }}>Register</a>
            </div>
        </div >

    )
}

export default Login
