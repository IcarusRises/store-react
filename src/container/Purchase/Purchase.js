import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import InformationBoxes from '../../component/InformationBox/InformationBoxes/InformationBoxes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './Purchase.module.css';

class Purchase extends Component {
    state={
        form: {
            name: {
                value:''
            },
            payment: {
                value:''
            },
            email: {
                value:''
            },
            address: {
                value:''
            }
        },
        redirect: false,
        laptop: {},
    }

    componentDidMount(){
        axios.get('http://localhost:3001/laptops/purchase/' + this.props.match.params.id)
            .then(res => {
                let laptop = res.data;
                this.setState({
                    laptop: laptop
                })
            })
            .then(console.log('[purchase] ' + JSON.stringify(this.state.laptop)))
            .catch(err => console.log(err));
    }

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [name]: {
                    ...this.state.form[name],
                    value
                }
            }
        });
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to='/purchase/thankyou'/>
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const form = {
            name: this.state.form.name.value,
            payment: this.state.form.payment.value,
            email: this.state.form.email.value,
            address: this.state.form.address.value,
        };
        
        axios.post('http://localhost:3001/purchase', form)
        .then(res => {
            if(res.data.msg === 'success'){
                this.setRedirect()
            } else if(res.data === 'fail'){
                alert("Message failed to send.")
            }
        })
        .catch(err => console.log(err))
    }

    render(
        links=[
            {to: '/', label: 'Home'},
            {to:'', label: 'Purchase'},
        ]
    ){
        return(
            <Fragment>
                <div className={styles.Purchase_Area_E}>
                    <BreadCrumbs links={links}/>
                </div>
                <div className={`${styles.Purchase_Area_A}`}>
                    <InformationBoxes/>
                </div>
                <div className={`${styles.Purchase_Laptop_Container} ${styles.Purchase_Area_B}`}>
                <div className={styles.Purchase_Laptop_Header}>
                    <p>{this.state.laptop.brand}</p>
                    </div>
                    <div className={`${styles.Purchase_Laptop_Image_Container}`}>
                        <img className={styles.Purchase_Laptop_Image} src={this.state.laptop.image} alt=""/>
                    </div>
                    <div className={styles.Purchase_Laptop_Name}>
                        <p>{this.state.laptop.name}</p>
                    </div>
                </div>
                <div className={`${styles.Purchase_Area_C}`}>
                    <div className={styles.Purchase_Order_Summary_Container}>
                        <p className={styles.Purchase_Order_Title}>Order Summary</p>
                        <div className={styles.Purchase_Order_P}>
                            <p className={styles.Text_Margin}>{`Item: ${this.state.laptop.brand} ${this.state.laptop.name}`}</p>
                            <p className={styles.Text_Margin}>Price: ${this.state.laptop.price}</p>
                            <p className={`${styles.Text_Margin} ${styles.Purchase_Order_Total}`}>Total: ${this.state.laptop.price}</p>
                        </div>
                    </div>
                    <div className={`${styles.Purchase_Form_Container}`}>
                        <form onSubmit={this.submitHandler}>
                            <p className={styles.Purchase_Form_Title}>
                                Confirm Purchase
                            </p>
                            <div className={styles.Purchase_Form_Input_Container}>
                                <label>
                                    <input type="text" 
                                        name="name" 
                                        placeholder='Name' 
                                        onChange={this.inputHandler}
                                        className={`${styles.Purchase_Form_Input}`} 
                                    />
                                </label>
                                <div className={styles.Center}>
                                    <label>
                                        <select name="payment" value={this.state.form.payment.value} onChange={this.inputHandler} className={styles.Purchase_Selection}>
                                            <option value="" disabled selected>Purchase Method</option>
                                            <option value="cash">Cash</option>
                                            <option value="bank">Bank</option>
                                        </select>
                                    </label>
                                </div>
                                <label>
                                    <input type="email" 
                                        name='email' 
                                        placeholder='E-Mail' 
                                        onChange={this.inputHandler}
                                        className={`${styles.Purchase_Form_Input}`} 
                                    />
                                </label>
                                <label>
                                    <input type="text" 
                                        name='address' 
                                        placeholder='Address' 
                                        onChange={this.inputHandler}
                                        className={`${styles.Purchase_Form_Input}`} 
                                    />
                                </label>
                            </div>
                            {this.renderRedirect()}
                            <div className={`${styles.Purchase_Form_Button_Container} ${styles.Center}`}>
                                <button className={`${styles.Purchase_Form_Button}`}>
                                    <FontAwesomeIcon icon="shopping-cart"/> Purchase
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`${styles.Center} ${styles.Purchase_Thank_You_Container} ${styles.Purchase_Area_D}`}>
                    <p class={styles.Purchase_Thank_You}></p>
                </div>
            </Fragment>
        )
    }
}

export default Purchase;