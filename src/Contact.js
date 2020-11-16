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
                            <img className="responsive-img " src="https://imraan.in/wp-content/uploads/2020/04/imraan_optimized.jpg" alt="contact us" />
                            <span className="card-title titleText">Imran</span>
                        </div>
                        <div className="card-content">
                            <p className="App-link ">Check out my projects</p>
                        </div>
                        <div className="card-action">
                            <a href="https://imraan.in">My Blog</a>
                            <a href="https://iws.agency">IWS Agency</a>
                        </div>
                    </div>
                </div>
                <div className="col s2">&nbsp;</div>
            </div>
        </div>
    )
}
export default Contact;