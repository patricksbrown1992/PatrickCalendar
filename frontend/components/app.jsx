import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { Authorized, ProtectedRoute } from '../util/routeUtil';

// import Modal from './modal/modal'

const App = () => (
    <div>
        <h1>Patrick Calendar</h1>
    </div>
);
export default App;