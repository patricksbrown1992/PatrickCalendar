import * as APIUtil from '../util/eventUtil';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const DESTROY_EVENT = 'DESTROY_EVENT';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';



const receiveEvent = event => {
    return ({
        type: RECEIVE_EVENT,
        event
    });
};

const destroyEvent = (event) => {

    return ({
        type: DESTROY_EVENT,
        event
    });
};

const receiveEvents = events => {

    return ({

        type: RECEIVE_EVENTS,
        events
    });
};

export const clearEvents = () => {
    return {
        type: CLEAR_EVENTS
    }
}

export const getEvents = (user) => dispatch => (
    APIUtil.getEvents(user).then(events => (dispatch(receiveEvents(events))))
);

export const getEvent = (id) => dispatch => (
    APIUtil.getEvent(id).then(event => (dispatch(receiveEvent(event))))
);

export const createEvent= (event) => dispatch => {

    return APIUtil.createEvent(event).then(event => dispatch(receiveEvent(event)));

};

export const updateEvent = (event) => dispatch => (
    APIUtil.updateEvent(event).then(event => (dispatch(receiveEvent(event))))
);

export const deleteEvent = (event) => dispatch => {

    return APIUtil.deleteEvent(event).then(event => (dispatch(destroyEvent(event))));
};



