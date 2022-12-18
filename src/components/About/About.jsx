import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about-page-main'>
      <div className="about-page-card-main">
        <h1>About</h1>
        <div className="about-page-main-content-container">
          <section className='section-one'>
            <p className="first">
              A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.
            </p>
            <p className="second">
              Blog posts allow you and your business to publish insights, thoughts, and stories on your website about any topic. They can help you boost brand awareness, credibility, conversions, and revenue. Most importantly, they can help you drive traffic to your website.
            </p>
          </section>
          <section className="section-two">
            <h2>About us:</h2>
            <h3>Creators and Owner:</h3>
            <div className="about-page-creator-details">
              <div className="about-page-creator-one">
                <p>Pranav Visavadia : </p>
                <p>visavadiapa@gmail.com</p>
              </div>
              <div className="about-page-creator-two">
                <p>Sanjana Butani : </p>
                <p>sanjanabutani14@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;