export const getEvents = (user) => {
    return $.ajax({
        method: 'GET',
        url: '/api/events',
        data: {
            user_id: user.id,
        }
    });
};

export const getEvent = id => {

    return $.ajax({
        method: 'GET',
        url: `api/events/${id}`,

    });
};

export const createEvent = event => {

    return $.ajax({
        method: 'POST',
        url: `api/events`,
        data: {
            event
        }
    });
};

export const updateEvent = event => {
    return $.ajax({
        method: 'PATCH',
        url: `api/events/${event.id}`,
        data: {
            event
        }
    });
};

export const deleteEvent = event => {

    return $.ajax({
        method: 'DELETE',
        url: `api/events/${event.id}`,
        data: {
            event
        }

    });
};

