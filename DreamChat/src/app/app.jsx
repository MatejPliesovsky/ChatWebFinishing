import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Main from './components/Main.jsx';
import LoginPage from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DashBoard from './pages/DashBoard.jsx';
import FriendBoard from './pages/FriendBoard.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import WelcomePage from './pages/WelcomePage.jsx'

const target = document.getElementById('app');
const node = <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <Route path="register" component={Register}/>
        <Route path="dashboard" component={DashBoard}/>
        <Route path="welcomepage" component={WelcomePage}/>
        <Route path="friendboard" component={FriendBoard}/>
        <Route path="settings" component={Settings}/>
        <Route path="profile" component={Profile}/>
        <IndexRoute component={LoginPage}/>
    </Route>
</Router>;

ReactDOM.render(node, target);
