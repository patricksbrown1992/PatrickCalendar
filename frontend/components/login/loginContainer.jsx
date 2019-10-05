import { connect } from 'react-redux';
import LogInForm from './loginForm';
import { login, checkEmail, clearErrors } from '../../actions/sessionActions';

const msp = (state) => {

    return {
        errors: state.errors,
        verified: state.ui.verified.verified
    };

};

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    checkEmail: (email) => dispatch(checkEmail(email)),
    clearErrors: () => dispatch(clearErrors()),
});


export default connect(msp, mdp)(LogInForm);