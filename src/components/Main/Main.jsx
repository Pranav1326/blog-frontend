/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './main.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Articles from '../Articles/Articles';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import Article from '../Article/Article';
import Navbar from '../Navbar/Navbar';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ResetPassword from '../ResetPassword/ResetPassword';
import Error from '../Error/Error';
import AuthForgotPassword from '../AuthForgotPassword/AuthForgotPassword';
import About from '../About/About';
import UserProfile from '../UserProfile/UserProfile';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

const Main = () => {

  // Search State
  const [ searchQuery, setSearchQuery ] = useState("");

  const BASE_URL = "https://blog-api-c8j7.onrender.com/api";
  const user = useSelector(state => state.userReducer.user);
  const resetPassword = useSelector(state => state.userReducer.resetPassword);
  
  return (
    <BrowserRouter>
    {<Navbar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />}
      <div className='main'>
        <Routes>
          <Route path='/' element={<Articles searchQuery={searchQuery} setSearchQuery={setSearchQuery} BASE_URL={BASE_URL}/>} />
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login BASE_URL={BASE_URL}/>} />
          <Route path='/register' element={<Register BASE_URL={BASE_URL}/>} />
          <Route path='/forgotpassword' element={<ForgotPassword BASE_URL={BASE_URL}/>} />
          <Route path='/authforgotpassword' element={resetPassword ? <AuthForgotPassword BASE_URL={BASE_URL}/> : <ForgotPassword BASE_URL={BASE_URL}/>} />
          <Route path='/resetpassword' element={resetPassword ? <ResetPassword BASE_URL={BASE_URL}/> : <ForgotPassword BASE_URL={BASE_URL}/>} />
          <Route path='/article/:id' element={<Article BASE_URL={BASE_URL}/>} />
          {/* <Route path='/article?' element={<Article BASE_URL={BASE_URL}/>} /> */}
          <Route path='/profile' element={user ? <Profile BASE_URL={BASE_URL}/> : <Login BASE_URL={BASE_URL}/>} />
          <Route path='/userprofile/:id' element={<UserProfile BASE_URL={BASE_URL}/>} />
          <Route path='/editprofile' element={user ? <EditProfile BASE_URL={BASE_URL}/> : <Login BASE_URL={BASE_URL}/>} />
          {/* <Route path='/createpost' element={<CreatePost BASE_URL={BASE_URL}/>} /> */}
          {/* <Route path='/articleupdate/:id' element={<UpdateArticle BASE_URL={BASE_URL}/>} /> */}
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;