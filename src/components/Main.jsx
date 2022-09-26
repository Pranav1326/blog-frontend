import React, { useContext } from 'react';
import './styles/main.css';
import Login from './Login';
import Register from './Register';
import Articles from './Articles';
import Profile from './Profile';
import EditProfile from './EditProfile';
import CreatePost from './CreatePost';
import Article from './Article';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import AuthNav from './AuthNav';
import { Context } from '../context/Context';
import { useEffect } from 'react';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Error from './Error';
import AuthForgotPassword from './AuthForgotPassword';
import UpdateArticle from './UpdateArticle';
import About from './About';
import UserProfile from './UserProfile';
import Footer from './Footer';

const Main = () => {
  const { user, resetPassword } = useContext(Context);
  function fetchNav() {
    if(user){
      return(<AuthNav/>);
    }
    else{
      return(<Navbar/>);
    }
  }
  useEffect(() => {
    fetchNav();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user]);
  return (
    <BrowserRouter>
    {user ? <AuthNav /> : <Navbar />}
      <div className='main'>
        <Routes>
          <Route path='/' element={<Articles />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/forgotpassword' element={<ForgotPassword />}/>
          <Route path='/authforgotpassword' element={<AuthForgotPassword />}/>
          <Route path='/resetpassword' element={resetPassword ? <ResetPassword /> : <Error pwdreset={resetPassword}/>}/>
          <Route path='/article/:id' element={<Article />}/>
          <Route path='/article?' element={<Article />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/userprofile/:id' element={<UserProfile />} />
          <Route path='/editprofile' element={user ? <EditProfile /> : <Login />}/>
          <Route path='/createpost' element={user ? <CreatePost /> : <Login />}/>
          <Route path='/articleupdate/:id' element={user ? <UpdateArticle /> : <Login />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;