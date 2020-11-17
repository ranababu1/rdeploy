import React from 'react'

class Sidebar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3 className="header">Topics</h3>
                <div className="sidebar">
                    <p>Tech Updates</p>
                    <p>TIL</p>
                    <p>Gadget Updates</p>
                    <p>DIY</p>
                </div>
                <h4 className="header">Newsletter</h4>
                <div className="sidebar">
                    <p>Enter you email to get free updates</p>
                    <p>Email Input Box</p>
                </div>
                <h4 className="header">Ad Space</h4>
                <div className="sidebar">
                    <p>Adsense Box goes here</p>
                </div>
            </div>
        );
    }
}

export default Sidebar;