import eventsIndexForm from './eventIndexForm';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    user: state.entities.user[state.session.id],
    events: Object.values(state.entities.events),
});

const mdp = dispatch => ({
    getEvents: (user) => dispatch(getEvents(user)),
   


});

export default withRouter(connect(msp, mdp)(eventsIndexForm));