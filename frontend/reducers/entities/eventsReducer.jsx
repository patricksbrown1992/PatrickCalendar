import { RECEIVE_EVENTS, RECEIVE_EVENT, DESTROY_EVENT, CLEAR_EVENTS } from '../../actions/eventActions';
import { REMOVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            const events = {};
            action.events.forEach((event) => {
                events[event.id] = event;
            });

            return merge({}, state, events);
        case RECEIVE_EVENT:

            return merge({}, state, { [action.event.id]: action.event });
        case CLEAR_EVENTS:
            return {};
        case DESTROY_EVENT:

            const newState = merge({}, state);
            delete newState[action.event.id];
            return newState;
        case REMOVE_USER:
            return {};
        default:
            return state;

    }
};
export default eventsReducer;