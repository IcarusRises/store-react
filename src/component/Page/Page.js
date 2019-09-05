import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Toolbar from '../../component/Header/Toolbar/Toolbar';
import LaptopForm from '../Form/LaptopForm';
import Store from '../../component/Store/Store';
import Laptop from '../../container/Laptop/Laptop';
import Contact from '../Contact/Contact';
import SignIn from '../../component/SignIn/SignIn';
import SearchResults from '../../container/SearchResults/SearchResults';
import Footer from '../../component/Footer/Footer';

const page = () => {
    return(
        <div>
            <Toolbar/>
            <Switch>
                <Route exact path="/" component={Store}/>
                <Route path="/add" component={LaptopForm}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/laptops/:id" component={Laptop}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/search' render={(props) => 
                    <SearchResults {...props} />
                }/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </div>
    );
}


export default page;