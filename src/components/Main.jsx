/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
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
import axios from 'axios';

const Main = () => {

  const BASE_URL = "https://blog-of-pranav.herokuapp.com/api";
  const { user, resetPassword } = useContext(Context);
  const { search } = window.location;
  const [ post, setPost ] = useState(null);
  const query = new URLSearchParams(search).get("search");
  const [searchQuery, setSearchQuery] = useState(query || "");

  // Handle Search Query
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      const postName = post.title.toLowerCase();
      const authorName = post.author.toLowerCase();
      if(authorName.includes(query.toLowerCase())){
        return authorName.includes(query.toLowerCase());
      }
      return postName.includes(query.toLowerCase());
    });
  };

  function fetchNav() {
    if(user){
      return(<AuthNav/>);
    }
    else{
      return(<Navbar/>);
    }
  }

  useEffect(() => {
    const baseUrl = BASE_URL+"/articles";
    axios.get(baseUrl)
    .then((response) => {
      setPost(response.data);
    })
    .catch((err) => console.log(err));
    fetchNav();
  },[user]);

  const filteredPosts = filterPosts(post, searchQuery);

  return (
    <BrowserRouter>
    {user ? <AuthNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> : <Navbar />}
      <div className='main'>
        <Routes>
          <Route path='/' element={<Articles post={filteredPosts} setPost={setPost} BASE_URL={BASE_URL}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login BASE_URL={BASE_URL}/>}/>
          <Route path='/register' element={<Register BASE_URL={BASE_URL}/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword BASE_URL={BASE_URL}/>}/>
          <Route path='/authforgotpassword' element={<AuthForgotPassword BASE_URL={BASE_URL}/>}/>
          <Route path='/resetpassword' element={resetPassword ? <ResetPassword BASE_URL={BASE_URL}/> : <Error pwdreset={resetPassword}/>}/>
          <Route path='/article/:id' element={<Article BASE_URL={BASE_URL}/>}/>
          <Route path='/article?' element={<Article BASE_URL={BASE_URL}/>}/>
          <Route path='/profile' element={<Profile BASE_URL={BASE_URL}/>} />
          <Route path='/userprofile/:id' element={<UserProfile BASE_URL={BASE_URL}/>} />
          <Route path='/editprofile' element={user ? <EditProfile BASE_URL={BASE_URL}/> : <Login BASE_URL={BASE_URL}/>}/>
          <Route path='/createpost' element={user ? <CreatePost BASE_URL={BASE_URL}/> : <Login BASE_URL={BASE_URL}/>}/>
          <Route path='/articleupdate/:id' element={user ? <UpdateArticle BASE_URL={BASE_URL}/> : <Login BASE_URL={BASE_URL}/>}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;