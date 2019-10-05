import { combineReducers } from 'redux';
import CheckUserReducer from './checkUserReducer';


const uiReducer = combineReducers({
    verified: CheckUserReducer,
  
});
export default uiReducer;