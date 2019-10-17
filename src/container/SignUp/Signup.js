import React, {Component} from 'react';

import styles from './SignUp.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class signUp extends Component {
    state = {
        email: ''
    }

    inputHandler = (e) => {
        this.setState({
            ...this.state.email,
            email: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.email);
    }
    
    render(){
        return(
            <div className={styles.SignupContainer}>
                <div className={styles.SignUp}>
                    <p className={styles.Signup_CTA}>Sign Up for News and Deals</p>
                    <form className={`${styles.center}`} onSubmit={this.submitHandler}>
                        <input 
                            type="text" 
                            name='email' 
                            placeholder="Please Enter E-mail"
                            onChange={this.inputHandler}    
                        />
                        <button>
                            <FontAwesomeIcon icon="envelope"/>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default signUp;