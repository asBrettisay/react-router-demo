import React, {Component} from 'react';
import {render} from 'react-DOM';
import {Router, Route, hashHistory} from 'react-router';

import UsersList from './UsersList.jsx';
import User from './User.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                {this.props.children}
            </div>
        )
    }
}

render((<Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="users" component={UsersList} />
            <Route path="user/:id" component={User} />
          </Route>
        </Router>
), document.getElementById('root'));