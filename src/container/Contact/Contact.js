import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import styles from './Contact.module.css';

class Contact extends Component {
    state = {
        form: {
            name: {
                value: ''
            },
            email: {
                value: ''
            },
            help: {
                value: ''
            },
            comment: {
                value: ''
            }
        },
        redirect: false,
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/contact/thankyou'/>
        }
    }

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            form : {
                ...this.state.form,
                [name]: {
                    ...this.state.form[name],
                    value
                }
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        const form = {
                name: this.state.form.name.value,   
                email: this.state.form.email.value,  
                help: this.state.form.help.value,
                comment: this.state.form.comment.value
            }

        axios.post('http://localhost:3001/contact', form)
        .then((res)=>{
            if (res.data.msg === 'success'){
                this.setRedirect()
            }else if(res.data === 'fail'){
                alert("Message failed to send.")
            }
        })
        .catch(err => console.log(err))
    }

    render(
        links=[
            {to: '/', label: 'Home'},
            {to:'/contact', label: 'Contact'},
        ]
    ){
        return(
            <Fragment>
                <BreadCrumbs links={links}/>
                <div className={styles.Contact_Form_Empty_Area_A}>

                </div>
                <div className={styles.Contact_Form_Container}>
                    <form onSubmit={this.submitHandler}>
                        <p className={styles.Contact_Form_Title}>
                            Contact Us
                        </p>
                        <label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                className={`${styles.Contact_Form_Input}`} 
                                onChange={this.inputHandler}
                            />
                        </label>
                        <label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email" 
                                className={`${styles.Contact_Form_Input}`} 
                                onChange={this.inputHandler}/>
                        </label>
                        <div className={styles.Center}>
                            <label>
                                <select name="help" value={this.state.form.help.value} className={`${styles.Contact_Selection}`} onChange={this.inputHandler}>
                                    <option value="" disabled selected>How can we help?</option>
                                    <option value="delivery" name="delivery">Delivery</option>
                                    <option value="technical" name="technical">Technical</option>
                                </select>
                            </label>
                        </div>
                        <div className={`${styles.Center}`}>
                            <label >
                                <textarea type="text" name='comment' placeholder="Comment" className={`${styles.Contact_Form_Input}`} onChange={this.inputHandler}/>
                            </label>
                        </div>
                        {this.renderRedirect()}
                        <div className={`${styles.Center}`}>
                            <button type="submit" className={styles.Contact_Form_Button}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className={styles.Contact_Form_Empty_Area_C}>

                </div>
                <div className={styles.Contact_Form_Empty_Area_D}>
                    
                </div>
            </Fragment>
        )
    }
}

export default Contact;