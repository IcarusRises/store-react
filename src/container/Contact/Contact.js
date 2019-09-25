import React, {Component, Fragment} from 'react';
import axios from 'axios';
import styles from './Contact.module.css';

import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';

class Contact extends Component{

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const data = {
                name: name,   
                email: email,  
                message: message
            }
  
        const test = 'test';
        axios.post('http://localhost:3001/contact', data)
        .then(res => console.log(res.data))
        .then((response)=>{
            if (test === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
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
                <div className={styles.Contact_Container}>
                    <form onSubmit={this.handleSubmit.bind(this)} action="POST" className={styles.Contact_Form}>
                        <p className={styles.Contact_Title}>Whats on your mind?</p>
                        <div>
                            <label htmlFor=""  className={styles.Contact_Label}>Name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div>
                            <label htmlFor=""  className={styles.Contact_Label}>Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div>
                            <textarea type="text" className={styles.Contact_Text}/>
                        </div>
                        <button type="submit" className={styles.Contact_Button}>Submit</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Contact;