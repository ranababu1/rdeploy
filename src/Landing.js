import React from 'react';
import myImg from './assets/img/imraan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEnvelope, faMobile} from '@fortawesome/free-solid-svg-icons'
const Landing = () => {
return (
<div className="App">
    <div className="row">

        <div className="col s12 m6">
            <div className="padding30 imgWrapper">
                <img src={myImg} className="responsive-img imageofHero" alt="Imraans pic" />
            </div>
        </div>
        <div className="col s12 m6">
            <div className="padding30">
                <h2>Hi there, i am <span>Imran</span></h2>
                <p>currently working as a Marketing Automation professional. When I am not building ETL workflows for
                    campaigns or building a module for a web application, I play Counter Strike Global Offensive
                    competetive in the Steam servers, write in Quora to help others & I also write about stuffs I love
                    in my blog.

                </p>
                <hr />
                <ul className="list basicInfo">
                    <li className="personalStats">
                        <FontAwesomeIcon className = "faIcons" icon={faBirthdayCake} />
                        18th May</li>
                    <li className="personalStats"><FontAwesomeIcon className = "faIcons" icon={faMobile} />+91
                        9854082826</li>
                    <li className="personalStats"><FontAwesomeIcon className = "faIcons" icon={faEnvelope} />contact@imraan.in
                    </li>
                </ul>
            </div>
        </div>

    </div>

</div>
)
}

export default Landing;