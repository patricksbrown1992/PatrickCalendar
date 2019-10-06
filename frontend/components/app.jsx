import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginIn from '../components/login/loginContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import SignUp from '../components/signup/signupContainer';
import WeekShow from '../components/week/weekShowContainer';
// import Modal from './modal/modal'
import Events from '../components/events/eventIndexContainer';

const App = () => (
    <>
        <Switch>
            <Authorized path='/signup' component={SignUp} />
            <Authorized exact path='/' component={LoginIn} />
            <ProtectedRoute path='/week' component={WeekShow} />
            <ProtectedRoute path='/events' component={Events} />
        </Switch>
    </>
);
export default App;