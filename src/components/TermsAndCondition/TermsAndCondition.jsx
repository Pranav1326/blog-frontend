import React from 'react';

const TermsAndCondition = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <div className='about-page-main'>
            <div className="about-page-card-main">
                <h1>Terms and Conditions</h1>
                <div className="about-page-main-content-container">
                    <section className='section-one'>
                        <p className="second">
                            Effective Date: June 8th, 2023
                        </p>
                        <p className="second">
                            Please read these Terms and Conditions carefully before using our personal blog website. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website.
                        </p>
                        <p className="first-intro">
                            Content and Intellectual Property
                        </p>
                        <p className="second">
                            The content published on our website, including articles, blog posts, images, videos, and other materials, is the intellectual property of the website owner unless otherwise stated. You may not reproduce, modify, distribute, or republish any content from our website without obtaining prior written permission.
                        </p>
                        <p className="first-intro">
                            User Contributions
                        </p>
                        <p className="second">
                            You may have the opportunity to submit comments, feedback, or other user-generated content on our website. By submitting such content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, reproduce, distribute, and display your content for any purpose related to our website.
                        </p>
                        <p className="second">
                            You are solely responsible for the content you submit and agree not to post or transmit any content that is unlawful, defamatory, abusive, obscene, or infringes upon the rights of others. We reserve the right to remove or edit any user-generated content that violates these Terms and Conditions.
                        </p>
                        <p className="first-intro">
                            Links to Third-Party Websites
                        </p>
                        <p className="second">
                            Our website may contain links to third-party websites or services for your convenience or reference. We do not endorse or have control over the content, privacy practices, or availability of these third-party sites. We are not responsible for any damages or losses arising from your use of these external links.
                        </p>
                        <p className="first-intro">
                            Disclaimer of Liability
                        </p>
                        <p className="second">
                            The information provided on our website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, suitability, or availability of the information. Any reliance you place on such information is strictly at your own risk.
                        </p>
                        <p className="second">
                            We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use our website or any content provided therein. This includes, but is not limited to, damages for loss of profits, data, or goodwill.
                        </p>
                        <p className="first-intro">
                            Changes to These Terms and Conditions
                        </p>
                        <p className="second">
                            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. We encourage you to review this page periodically for any changes. Your continued use of our website after any modifications signify your acceptance of the updated Terms and Conditions.
                        </p>
                        {/* <p className="first-intro">
                            Governing Law
                        </p>
                        <p className="second">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of [your jurisdiction]. Any legal action or proceeding arising out of or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in [your jurisdiction].
                        </p> */}
                        <p className="first-intro">
                            Contact Information
                        </p>
                        <p className="second">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or the practices of our website, please contact us at <a href="mailto:visavadiapa@gmail.com">visavadiapa@gmail.com</a>
                        </p>
                        <p className="second">
                            By using our website, you consent to the collection, use, and disclosure of your information as outlined in this Privacy Policy.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TermsAndCondition;