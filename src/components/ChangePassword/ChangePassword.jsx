import React, { useState } from 'react';
import "./changepassword.css";
import { changePassword } from '../../api/userProfile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChangePassword = () => {

  const user = useSelector(state => state.userReducer.user);
  const navigate = useNavigate();
  
  const [newPasswordData, setNewPasswordData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [ showValues, setShowValues ] = useState(false);

  // onChange function for inputs
  const handleChange = e => {
    const { name, value } = e.target;
    setNewPasswordData({ ...newPasswordData, [name]: value });
  }

  //  Toggle Password Visibility to Text
  const handleShowValues = (e) => {
    setShowValues(!showValues);
  }

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newPasswordData.password === newPasswordData.confirmPassword){
      window.confirm("Are you sure?") && changePassword({ userId: user._id, password: newPasswordData.password }, navigate);
    }
    else{
      alert("Password Doesn't Match!");
    }
  }
  
  return (
    <div className='change-password-main'>
      <div className="change-password-box">
        <form action="/profile" method='POST' className="login-form" onSubmit={handleSubmit}>
          <h1>Change Password</h1>
          <div className="new-password">
            <span>New Password</span>
            <input type={showValues ? "text" : "password"} name='password' value={newPasswordData.password} onChange={handleChange} required />
          </div>
          <div className="confirm-password">
            <span>Confirm Password</span>
            <input type={showValues ? "text" : "password"} name='confirmPassword' value={newPasswordData.confirmPassword} onChange={handleChange} required />
          </div>
          <div className="change-password-show-values">
            <input type="checkbox" name="showvalues" value={showValues} onChange={handleShowValues} />
            <span>Show Values</span>
          </div>
          <button className='btn change-password-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;