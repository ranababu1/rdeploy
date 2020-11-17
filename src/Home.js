import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact'
import About from './About'
import Landing from './Landing'
import Menu from './Menu'
import ErrorComponent from './ErrorComponent'
import Blog from './Blog'
import Blog1 from './blogs/Blog1';
import Blog2 from './blogs/Blog2';
import Blog3 from './blogs/Blog3';
import Blog4 from './blogs/Blog4';
import Blog5 from './blogs/Blog5';
class Home extends React.Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/about" component={About} />
                        <Route exact path="/blog" component={Blog} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog/blog1" component={Blog1} />
                        <Route path="/blog/blog2" component={Blog2} />
                        <Route path="/blog/blog3" component={Blog3} />
                        <Route path="/blog/blog4" component={Blog4} />
                        <Route path="/blog/blog5" component={Blog5} />

                        <Route component={ErrorComponent} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
export default Home;