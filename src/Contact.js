import React from 'react';

const Contact = () => {
    return (
        <div className="container App">
                   <h1>Contact Us</h1>
            <div className="row">
                <div className="col s2">&nbsp;</div>
                <div className="col s8">
                    <div className="card">
                        <div className="card-image imageofImr">
                            <img className="responsive-img " src="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2017/08/prototyping-7-simple-login-forms-for-web-mobile-apps.png.webp" alt="contact us" />
                            <span className="card-title titleText">Contact Form coming soon</span>
                        </div>
                        <div className="card-content">
                            <p className="App-link ">Meanwhile check out my projects</p>
                        </div>
                        <div className="card-action">
                            <a href="https://imraan.in">My Blog</a>
                            <a href="https://iws.agency">IWS Agency</a>
                            <a href="https://stayfit.pro">Stayfit Pro</a>
                        </div>
                    </div>
                </div>
                <div className="col s2">&nbsp;</div>
            </div>
        </div>
    )
}
export default Contact;