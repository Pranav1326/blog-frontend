import React from 'react';
import './styles/main.css';
import Login from './Login';
import Register from './Register';
import Articles from './Articles';
import Profile from './Profile';
import EditProfile from './EditProfile';
import CreatePost from './CreatePost';
import Article from './Article';

const Main = () => {
  return (
    <div className='main'>
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Articles /> */}
        {/* <Profile /> */}
        {/* <EditProfile /> */}
        {/* <CreatePost /> */}
        <Article />
    </div>
  )
}

export default Main;