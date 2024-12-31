import React, { useState } from 'react';
import './Register.css';
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { IoIosUnlock } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";


const Register = ({ setShowPage, setChangePage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword);
  return (
    <div className="register-bg">
      <div className='icons-close'>
        <IoMdClose onClick={() => setShowPage(false)} />
      </div>
      <h1 className="header-register" >Registration</h1>
      <div className="form-register">
        <form>
          <div className="input-group">
            <input type="email" id="email" name="email" required placeholder='Enter your email' />
            <MdEmail className='icons' />
          </div>
          <div className="input-group">
            <input type={showPassword ? "text" : "password"} id="password" name="password" required placeholder='Password' />
            {showPassword ? <IoIosUnlock className='icons' onClick={handleShowPassword} /> : <MdLock className='icons' onClick={handleShowPassword} />}
          </div>
          <div className="input-group">
            <input type={confirmPassword ? "text" : "password"} id="password" name="password" required placeholder='Confirm password' />
            {confirmPassword ? <FaCheckCircle className='icons' onClick={handleConfirmPassword} /> : <GiConfirmed className='icons' onClick={handleConfirmPassword} />}

          </div>
          <div className="checkbox-group">
            <div className='question'>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">I agree to the terms & conditions</label>
            </div>
          </div>
          <button className="btn-register">Register</button>
        </form>
      </div>
      <div className="register-group">
        <p className="question-register">Already have account?</p>
        <a href="#" className="register-login"
          onClick={(e) => {
            e.preventDefault();
            setChangePage('login');
          }}
        >Login</a>
      </div>
    </div >
  )
}

export default Register
