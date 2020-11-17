import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './blogs/Sidebar'
const Blog = () => {
return (
<div className="contentPart">
    <div className="container">
        <div className="row">
            <div className="col s12 m8">
                <h3 className="header">Recent Posts</h3>

                <Link to="/blog/blog1">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img alt="blog Image"
                                src="https://thumbs.dreamstime.com/b/banner-background-colorful-holi-powder-snow-multiple-colors-surface-146214908.jpg" />
                        </div>
                        <div className="card-stacked colorGrey">
                            <div className="card-content">
                                <h4>How to cancel a sent email in gmail</h4>
                            </div>

                        </div>
                    </div>
                </Link>
                <Link to="/blog/blog2">
                <div className="card hoverable">
                    <div className="card-image">
                        <img alt="blog Image"
                            src="https://thumbs.dreamstime.com/b/banner-background-colorful-holi-powder-snow-multiple-colors-surface-146214908.jpg" />
                    </div>
                    <div className="card-stacked colorGrey">
                        <div className="card-content">
                            <h4>Gaming PC under Rs 50000
                            </h4>
                        </div>

                    </div>
                </div>
            </Link>
            <Link to="/blog/blog3">
                <div className="card hoverable">
                    <div className="card-image">
                        <img alt="blog Image"
                            src="https://thumbs.dreamstime.com/b/banner-background-colorful-holi-powder-snow-multiple-colors-surface-146214908.jpg" />
                    </div>
                    <div className="card-stacked colorGrey">
                        <div className="card-content">
                            <h4>Best Zoom Alternative For Online Meetings </h4>
                        </div>

                    </div>
                </div>
            </Link>
            <Link to="/blog/blog4">
                <div className="card hoverable">
                    <div className="card-image">
                        <img alt="blog Image"
                            src="https://thumbs.dreamstime.com/b/banner-background-colorful-holi-powder-snow-multiple-colors-surface-146214908.jpg" />
                    </div>
                    <div className="card-stacked colorGrey">
                        <div className="card-content">
                            <h4>New Features of Android 10
                            </h4>
                        </div>

                    </div>
                </div>
            </Link>
                <div className="card hoverable">
                    <div className="card-image">
                        <img alt="blog Image"
                            src="https://thumbs.dreamstime.com/b/banner-background-colorful-holi-powder-snow-multiple-colors-surface-146214908.jpg" />
                    </div>
                    <div className="card-stacked colorGrey">
                        <div className="card-content">
                            <h4>Best Payment Wallet In India
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <Sidebar />
            </div>
        </div>
    </div>
    <div className="white pagi">
        <div className="container">
        <ul className="pagination">
            <li className="disabled"><a href="#!"><FontAwesomeIcon className = "faIcons" icon={faChevronLeft} /></a></li>
            <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>
            <li className="waves-effect"><a href="#!">3</a></li>
            <li className="waves-effect"><a href="#!"><FontAwesomeIcon className = "faIcons" icon={faChevronRight} /></a></li>
          </ul>
        </div>
    </div>
</div>
)
}
export default Blog;