import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', password2: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        if (e.currentTarget.classList[0] === "sign-up-continue") {
            if(this.state.password == this.state.password2){
                let user = {email: this.state.email, password: this.state.password};
                this.props.signup(user);
                this.setState({ email: '', password: '', password2: ''});
                this.props.clearErrors();

            }

        } else {
            const email = 'admin@admin.com';
            const password = '123456';
            const person = { email, password };
            this.props.login(person);
            this.setState({ email: '', password: '' });
            this.props.clearErrors();
        }

    }

    render() {

        let errors;
        if (this.props.errors.length > 0) {

            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
        }

        return (

            <div className='outerdiv'>
                <div className='sign-up-form'>

                    <div className="sign-up-top">
                        <h1 className='log-in-poogle'>Poogle</h1>
                        <h3>Create your Poogle Account</h3>
                        <h3>to continue to Patrick Calendar</h3>

                    </div>

                    <div className="sign-up-middle">
                        <form onSubmit={this.handleSubmit}>
                            <div className="demo-button">
                                <button type='submit'>Demo for Free</button>
                            </div>
                        </form>
             
                        <div className="sign-up-inputs">

                            <input className="sign-up-email" type="text" value={this.state.email} placeholder='Email' onChange={this.handleChange('email')} />
                            <div className = 'double-password'>
                                <input className="sign-up-password" type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} />
                                <input className="sign-up-password" type="password" placeholder='Confirm' value={this.state.password2} onChange={this.handleChange('password2')} />

                            </div>
                        </div>
                     
                        {errors}
                        
                    </div>
                    <div className='sign-up-button'>
                        <Link to='/signup'>Create account</Link>
                        <form className = 'sign-up-continue' onSubmit={this.handleSubmit}>
                            <button type='submit'>Next</button>
                        </form>
                    </div>
                    
                    <div className='external-links'>
                        <ul >
                            <li><a href="https://patricksbrown1992.github.io/profile-site/">Portfolio</a></li>
                            <li><a href="https://www.linkedin.com/in/patricksbrown1992/">LinkedIn</a></li>
                            <li><a href="https://github.com/patricksbrown1992">Github</a></li>

                        </ul>

                    </div>

                </div>
            </div>

        );
    };
};

export default SignUpForm;