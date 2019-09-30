import React, {Component, Fragment} from 'react';
import axios from 'axios';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import styles from './Contact.module.css';

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
                <div className={styles.Contact_Empty_Area_A}>
                test a
                </div>
                <div className={styles.Contact_Empty_Area_B}>
                test b
                </div>
                <div className={styles.Contact_Form_Container}>
                    <form onSubmit={this.handleSubmit.bind(this)} action="POST">
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div>
                            <label htmlFor="">E-mail</label>
                            <input type="text" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="">How can I help?</label>
                            <textarea type="text" id="message"/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles.Contact_Empty_Area_D}>

                </div>
            </Fragment>
        )
    }
}

export default Contact;