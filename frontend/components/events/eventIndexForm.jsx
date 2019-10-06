import React from 'react';
import { merge } from 'lodash';
import { Link, Redirect } from 'react-router-dom';

class EventsIndexForm extends React.Component {
    constructor(props) {
        super(props);
    

    }

    componentDidMount(){
        this.props.getEvents(this.props.user)
    }





    

    render() {
        let events = this.props.events.map(event => {
           
                return (
                    <li key={event.id}>
                        <div className="event-title"> {event.title}</div>
                    </li>
                )
            
        })
        return (
            <>
                {events}
            </>
        )
    }

}

export default EventsIndexForm;