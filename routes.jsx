
import React, {Component} from 'react';
import {Link, Route, IndexRoute} from 'react-router';


class AppComponent extends Component {

    render() {
        return <div>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}
class HomepageComponent extends Component {

    render() {
        return <div className="temp">
            Home page Content
        </div>
    };
}

class AboutComponent extends Component {

    render() {
        return <div className="temp">
            About Content
        </div>
    };
}


export default (
    <Route path="/" component={AppComponent}>
        <IndexRoute component={HomepageComponent} />
        <Route path="about" component={AboutComponent} />
    </Route>);