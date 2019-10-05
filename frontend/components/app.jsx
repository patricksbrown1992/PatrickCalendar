import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginIn from '../components/login/loginContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import SignUp from '../components/signup/signupContainer';
import WeekShow from '../components/week/weekShowContainer';
// import Modal from './modal/modal'

const App = () => (
    <div>
        <Authorized path='/signup' component={SignUp} />
        <Authorized exact path='/' component={LoginIn} />
        <ProtectedRoute path='/week' component={WeekShow} />
    </div>
);
export default App;