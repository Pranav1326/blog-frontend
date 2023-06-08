import React from 'react';

const Aboutme = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <div className='about-page-main'>
            <div className="about-page-card-main">
                <h1>About Me</h1>
                <div className="about-page-main-content-container">
                    <section className='section-one'>
                        <p className="first-intro">
                            Hi there,
                        </p>
                        <p className="second">
                            I am Pranav Visavadia. I have completed my BCA degree in 2023 and now searching for degree of MCA. I am facinated by Web technology and development. My ultimate goal is to be a Full Stack Developer.
                        </p>
                        <p className="second">
                            I started my journey in 2020, when my bachelor degree starts. I enjoyed learning computer science so much that I purchased a course of Full Stack Development from Udemy mentored by Dr. Angela Yu (excellent course by the way). There my journey started as a web-developer.
                        </p>
                        <p className="second">
                            I always wanted to make a blog website by myself and write blogs about what I know about the web and technology. Also, it is an excellent way to showcase what skills, knowledge and experience I have. I will try my best to upload the articles regularly.
                        </p>
                        <p className="second">
                            You can checkout my portfolio <a href="https://pranav1326.github.io/pranav-portfolio/" target='_blank' rel="noopener noreferrer">here</a>
                        </p>
                        <p className="second">
                            Thanks for reading.
                        </p>
                        <p className="second">
                            Pranav Visavadia : <a href="mailto:visavadiapa@gmail.com">visavadiapa@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;