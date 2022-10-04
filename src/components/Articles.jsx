import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Taglist from './Taglist';
import './styles/articles.css';
import axios from 'axios';

const baseUrl = "http://localhost:5000/api/articles";

const Articles = () => {
  const [post, setPost] = useState(null);
  let [tag, setTag] = useState("");

  useEffect(() => {
    axios.get(baseUrl)
    .then((response) => {
      setPost(response.data);
    })
    .catch((err) => console.log(err));
  }, []);

  if(!post) return "No posts!";

  const postData = post.map((e) => {
    let date = e.createdAt.split("T")[0];
    return(
      <BlogCard
        key={e._id}
        id={e._id}
        author={e.author}
        publish={date}
        title={e.title}
        description={e.description}
        tags={e.tags}
      />
    );
  });

  const handleTag = async (event, manualTag) => {
    event.target.state = "active";
    tag=manualTag;
    setTag(manualTag);
    if(tag === "All Posts"){
      setPost(post);
    }
    else{
      await axios.get(`${baseUrl}?tag=${tag}`)
      .then(result => {
        setPost(result.data);
        if(!result.data){
          alert(`No Articles Found!`);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  
  return (
    <div className="articles">
      <section className='section-1'>
            <div className="cards">
              {postData}
            </div>
        </section>
        <section className="section-2">
            <div className="taglist">
              <Taglist handleTag={handleTag}/>
            </div>
        </section>
    </div>
  );
}

export default Articles;