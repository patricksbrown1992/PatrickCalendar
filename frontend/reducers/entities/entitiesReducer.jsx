import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    events: eventsReducer

});
export default entitiesReducer;

