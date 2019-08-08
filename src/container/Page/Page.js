import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Toolbar from '../../component/Header/Toolbar/Toolbar';
import LaptopForm from '../Form/LaptopForm';
import Store from '../../component/Store/Store';
import Laptop from '../../component/Laptop/Laptop';
import Contact from '../Contact/Contact';
import Footer from '../../component/Footer/Footer';

class Page extends Component{
    render(){
        return(
            <div>
                <Toolbar/>
                <Switch>
                    <Route exact path="/" exact component={Store}/>
                    <Route path="/add" component={LaptopForm}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/laptops/:id" component={Laptop}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Page;