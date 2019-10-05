import React from 'react';
import { Link } from 'react-router-dom';


class WeekShowForm extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
    
    }

    handleSubmitLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }



    render() {
        return (
          
            <button onClick={this.handleSubmitLogOut}>Logout</button>
        )
    }
}



export default WeekShowForm;