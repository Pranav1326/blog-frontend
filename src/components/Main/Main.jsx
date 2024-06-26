import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './main.css';
import Login from '../Login/Login';
// import Register from '../Register/Register';
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
import CreatePost from '../CreatePost/CreatePost';
import UpdateArticle from '../UpdateArticle/UpdateArticle';
import { useSelector } from 'react-redux';
import Aboutme from '../Aboutme/Aboutme';
import Disclaimer from '../Disclaimer/Disclaimer';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import TermsAndCondition from '../TermsAndCondition/TermsAndCondition';
import UnpublishedArticles from '../Unpublished/UnpublishedArticles';
import ChangePassword from '../ChangePassword/ChangePassword';

const Main = () => {

  const user = useSelector(state => state.userReducer.user);
  const resetPassword = useSelector(state => state.userReducer.resetPassword);
  
  return (
    <BrowserRouter>
    <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/about' element={<About />}/>
          <Route path='/aboutme' element={<Aboutme />}/>
          <Route path='/disclaimer' element={<Disclaimer />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/terms-and-condition' element={<TermsAndCondition />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/unpublished' element={<UnpublishedArticles />} />
          {/* <Route path='/register' element={<Register BASE_URL={BASE_URL}/>} /> */}
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/authforgotpassword' element={resetPassword ? <AuthForgotPassword /> : <ForgotPassword />} />
          <Route path='/resetpassword' element={resetPassword ? <ResetPassword /> : <ForgotPassword />} />
          <Route path='/article/:id' element={<Article />} />
          {/* <Route path='/article?' element={<Article BASE_URL={BASE_URL}/>} /> */}
          {/* <Route path='/userprofile/:id' element={<UserProfile BASE_URL={BASE_URL}/>} /> */}
          <Route path='/profile' element={user ? <Profile /> : <Login />} />
          <Route path='/changepassword' element={user ? <ChangePassword /> : <Login />} />
          <Route path='/editprofile' element={user ? <EditProfile /> : <Login />} />
          <Route path='/createpost' element={ user ? <CreatePost /> : <Login />} />
          <Route path='/articleupdate/:id' element={<UpdateArticle />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;