import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };
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
        if (this.props.verified === false) {
            this.props.checkEmail(this.state.email);
            this.props.clearErrors();
        } else {
            this.props.login(this.state);
            this.props.clearErrors();
        }

    }
    render() {
        let errors;
        // let changeHeight;
        if (this.props.errors.length > 0) {

            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
        }
        if (this.props.verified != true) {
            return (

                <div className='outerdiv'>
                    <div className='log-in-form'>
                        <div className="log-in-top">
                            <h1 className='log-in-Poogle'>Poogle</h1>
                            <h3>Sign in</h3>
                            <h4>to continue to Patrick Calendar</h4>
                        </div>

                        <div className="log-in-middle">


                            <input className="log-in-email-input" placeholder='Email address' type="text" value={this.state.email} onChange={this.handleChange('email')} />
                            {/* <input className={passwordClass} type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} /> */}
                            <br />

                            {errors}
                            <br />
                        </div>
                        <div className='login-button'>
                            <Link to='/signup'>Create account</Link>
                            <form onSubmit={this.handleSubmit}>
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

            )
           
        } else {
            return (
            <div className='outerdiv'>
                <div className='log-in-form'>
                    <div className="log-in-top">
                        <h1 className='log-in-Poogle'>Poogle</h1>
                        <h3>Sign in</h3>
                        <h3>to continue to Patrick Calendar</h3>
                    </div>

                    <div className="log-in-middle">


                        <input className="log-in-email-input" placeholder='password' type="password" value={this.state.password} onChange={this.handleChange('password')} />
                        <br />

                        {errors}
                        <br />
                        <div className='enter-username'>
                            <Link to='/signup'>Create account</Link>
                            <form onSubmit={this.handleSubmit}>
                                <button type='submit'>Next</button>
                            </form>
                        </div>
                        
                    </div>

                </div>
                <ul>
                    <a href="https://patricksbrown1992.github.io/profile-site/">Portfolio</a>
                    <a href="https://www.linkedin.com/in/patricksbrown1992/">LinkedIn</a>
                    <a href="https://github.com/patricksbrown1992">Github</a>

                </ul>
            </div>

            )
        }


       

    }
};

export default LogInForm;