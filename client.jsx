
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Router, Route, IndexRoute, browserHistory} from 'react-router';

import routes from './routes.jsx';


const Routes = (
    <Router history={browserHistory}>
        {routes}
    </Router>
);

ReactDOM.render(Routes, document.getElementById('app'));

