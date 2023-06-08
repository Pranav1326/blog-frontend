import React from 'react';

const PrivacyPolicy = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <div className='about-page-main'>
            <div className="about-page-card-main">
                <h1>Privacy Policy</h1>
                <div className="about-page-main-content-container">
                    <section className='section-one'>
                        <p className="second">
                            Effective Date: June 8th, 2023
                        </p>
                        <p className="second">
                            This Privacy Policy outlines how we collect, use, disclose, and safeguard the personal information of visitors to our personal blog website. We are committed to ensuring the privacy and security of the information you provide while interacting with our website.
                        </p>
                        <p className="first-intro">
                            Information We Collect
                        </p>
                        <p className="second">
                            When you visit our website, we may collect certain personally identifiable information, including but not limited to your name, email address, and any other information voluntarily provided by you through contact forms or comments. We may also collect non-personal information, such as your IP address, browser type, operating system, and website usage data through cookies or similar technologies.
                        </p>
                        <p className="first-intro">
                            Use of Information
                        </p>
                        <ol style={{paddingLeft: '1.4rem'}}>
                            <li className='second'>To personalize your experience and provide you with content and offerings tailored to your interests.</li>
                            <li className='second'>To improve our website and enhance user experience.</li>
                            <li className='second'>To respond to your inquiries, comments, or feedback.</li>
                            <li className='second'>To send periodic emails regarding updates, newsletters, or other relevant information. You may opt out of receiving these communications at any time.</li>
                            <li className='second'>To detect, prevent, and address technical issues or potential security breaches.</li>
                            <li className='second'>To comply with applicable legal obligations and regulations.</li>
                        </ol>
                        <p className="first-intro">
                            Data Security
                        </p>
                        <p className="second">
                            We implement reasonable security measures to protect the confidentiality, integrity, and availability of the information collected from you. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                        <p className="first-intro">
                            Disclosure of Information
                        </p>
                        <p className="second">
                            We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law enforcement or regulatory authorities.
                        </p>
                        <p className="first-intro">
                            Third-Party Links
                        </p>
                        <p className="second">
                            Our website may contain links to third-party websites or services. We have no control over the content, privacy practices, or security of these third-party sites. We encourage you to review the privacy policies of any external websites you visit.
                        </p>
                        <p className="first-intro">
                            Children's Privacy
                        </p>
                        <p className="second">
                            Our website is not intended for individuals under the age of 13. We do not knowingly collect or maintain personally identifiable information from anyone under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will take immediate steps to delete that information from our records.
                        </p>
                        <p className="first-intro">
                            Changes to This Privacy Policy
                        </p>
                        <p className="second">
                            We reserve the right to update or modify this Privacy Policy at any time without prior notice. We encourage you to review this policy periodically for any changes. Your continued use of our website after any modifications signify your acceptance of the updated Privacy Policy.
                        </p>
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

export default PrivacyPolicy;