import React from 'react'
import BlogCard from './BlogCard';
import Taglist from './Taglist';
import './styles/articles.css';

const Articles = () => {
  return (
    <div className="articles">
      <section className='section-1'>
            <div className="cards">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </section>
        <section className="section-2">
            <div className="taglist">
                <Taglist />
            </div>
        </section>
    </div>
  )
}

export default Articles;