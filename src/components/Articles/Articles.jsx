import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import Taglist from '../Taglist/Taglist';
import './articles.css';
import axios from 'axios';
import { baseUrl } from '../../api/url';
import RelatedArticles from '../PopularArticles/PopularArticles';
import { useNavigate } from 'react-router-dom';

const Articles = ({ BASE_URL }) => {
  const [ post, setPost ] = useState(null);
  let [ tag, setTag ] = useState("");
  const [ page, setPage ] = useState(1);
  const [ pages, setPages ] = useState();
  const [ search, setSearch ] = useState("");
  const [ searchedPost, setSearchedPost ] = useState();
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/articles?page=${page}`);
        setPost(res.data.articles);
        setPage(res.data.page);
        setPages(res.data.pages);
        window.scrollTo({top: 0, behavior: 'smooth'});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page]);

  if (!post) return <p className='no-posts-msg'>Loading...</p>;

  const postData = post && post.map((e, id) => {
    let date = e.createdAt.split("T")[0];
    return (
      <BlogCard
        key={id}
        id={e._id}
        author={e.author}
        publish={date}
        title={e.title}
        description={e.description}
        tags={e.tags}
        image={e.image}
      />
    );
  });

  const renderSearchedArticles = searchedPost && searchedPost.map((post, id) => {
    return(
      <div onClick={() => {
        navigate(`/article/${post._id}`);
      }} key={id} className="searched-article-card">
        <h1>{post.title}</h1>
      </div>
    );
  });

  // Sort by tag
  const handleTag = async (event, manualTag) => {
    event.target.state = "active";
    tag = manualTag;
    setTag(manualTag);
    if (tag === "All Posts") {
      setPost(post);
    }
    else {
      await axios.get(`${BASE_URL}/articles?tag=${tag}`)
        .then(result => {
          setPost(result.data);
          if (!result.data) {
            alert(`No Articles Found!`);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  // Loader
  if (post === [] || !post) {
    return (
      <h1>No Posts!</h1>
    );
  }

  // Previous Page
  const previousPage = async () => {
    setPage(page => page - 1);
  }

  // Next Page
  const nextPage = async () => {
    if(pages > page){
      setPage(page => page + 1);
    }
  }

  // Handle Search
  const handleSearchChange = async (e) => {
    setSearch(e.target.value);
    const res = await axios.get(`${baseUrl}/articles/search?search=${e.target.value}`);
    if(res){
      setSearchedPost(res.data);
      console.log(res.data);
    }
  }

  return (
    <div className="articles">
      {/* <img src="https://blog-api-c8j7.onrender.com/images/blog.jpg" className='blog-bg' alt="blog" /> */}
      {/* <div className="blog-bg"></div> */}
      <section className="section-2">
        <div className="taglist">
          <Taglist BASE_URL={BASE_URL} handleTag={handleTag} />
        </div>
      </section>
      <section className='section-1'>
        <div className="cards">
          {/* Search Bar */}
          <div className="search-main">
            <input type="text" name="search" value={search} onChange={handleSearchChange} autoComplete='off' />
            <svg width="22" height="22" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.0577 22.6061C26.2171 20.207 27.5286 17.0478 27.5286 13.5862C27.5286 6.08275 21.3661 0 13.7643 0C6.16249 0 0 6.08275 0 13.5862C0 21.0897 6.16249 27.1724 13.7643 27.1724C17.0531 27.1724 20.0725 26.0339 22.44 24.1344C22.4456 24.3812 22.5438 24.6263 22.7346 24.8147L32.3417 34.2975C32.7348 34.6855 33.3721 34.6855 33.7651 34.2975L34.2883 33.7811C34.6814 33.3931 34.6814 32.7641 34.2883 32.3761L24.6812 22.8933C24.5071 22.7215 24.2851 22.6258 24.0577 22.6061ZM13.7643 24.4552C7.68285 24.4552 2.75286 19.589 2.75286 13.5862C2.75286 7.58344 7.68285 2.71724 13.7643 2.71724C19.8458 2.71724 24.7757 7.58344 24.7757 13.5862C24.7757 19.589 19.8458 24.4552 13.7643 24.4552Z" fill="white"/>
            </svg>
          </div>
          { search ? 
            <div className="searched-articles">
              {search &&  <p className='search-number'>{ searchedPost && searchedPost.length} results</p>}
              {renderSearchedArticles}
            </div>
            :
              ""
          }
          {/* Posts */}
          {postData}
          {/* Pagination */}
          <div className='pagination'>
            <button onClick={previousPage} disabled={page === 1} >Previous</button>
            <p className='page-p'> {page} out of {pages} Pages </p>
            <button onClick={nextPage} disabled={page === pages} >Next</button>
          </div>
        </div>
      </section>
      <section className="section-3">
        <RelatedArticles />
      </section>
    </div>
  );
}

export default Articles;