import React from 'react';

const Disclaimer = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <div className='about-page-main'>
            <div className="about-page-card-main">
                <h1>Disclaimer</h1>
                <div className="about-page-main-content-container">
                    <section className='section-one'>
                        <p className="second">
                            The information provided on this personal blog website is for general informational purposes only. The content is based on personal experiences, opinions, and research, and should not be considered professional advice or a substitute for professional consultation. 
                        </p>
                        <p className="second">
                            While every effort is made to ensure the accuracy and reliability of the information presented, I make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website. 
                        </p>
                        <p className="second">
                            Any reliance you place on the information provided on this website is strictly at your own risk. I am not liable for any losses or damages, including without limitation, indirect or consequential loss or damage, arising from the use or reliance on the information presented on this website.
                        </p>
                        <p className="second">
                            External links and references may be provided on this website for convenience and further information. However, I have no control over the nature, content, and availability of those external sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
                        </p>
                        <p className="second">
                            The views and opinions expressed on this blog are purely my own and do not represent the views or opinions of any individuals or organizations that I may be associated with professionally or personally.
                        </p>
                        <p className="second">
                            I reserve the right to modify, update, or change the content and information provided on this website at any time without prior notice.
                        </p>
                        <p className="second">
                            By using this website, you acknowledge and agree to the terms and conditions of this disclaimer. If you disagree with any part of this disclaimer, please refrain from using this website.
                        </p>
                        <p className="second">
                            Please seek professional advice or consultation for specific situations or concerns related to your personal or professional endeavors.
                        </p>
                        <div className="disclaimer-consent">
                            <p className="first-intro" style={{marginBottom: 0}}>
                                Consent
                            </p>
                            <p className="second">
                                You hereby consent to our disclaimer and agree to its terms by using our website.
                            </p>
                        </div>
                        <p className="second">
                            If you require any more information or have any questions about this site's disclaimer, please feel free to contact by email at <a href="mailto:visavadiapa@gmail.com">visavadiapa@gmail.com.</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Disclaimer;