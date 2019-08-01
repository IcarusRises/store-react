import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Toolbar from '../../component/Header/Toolbar/Toolbar';
import LaptopForm from '../Form/LaptopForm';
import Store from '../../component/Store/Store';
import Footer from '../../component/Footer/Footer';

class Page extends Component{
    render(){
        return(
            <div>
                <Toolbar/>
                <Switch>
                    <Route path="/" exact component={Store}/>
                    <Route path="/add" component={LaptopForm}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Page;