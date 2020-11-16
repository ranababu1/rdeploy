import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact'
import About from './About'
import Landing from './Landing'
import Menu from './Menu'
import ErrorComponent from './ErrorComponent'
class Home extends React.Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={ErrorComponent} />

                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
export default Home;