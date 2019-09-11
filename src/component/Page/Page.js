import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import AuthorizedNavBar from '../AuthorizedNavBar/AuthorizedNavBar';
import Toolbar from '../Header/Toolbar/Toolbar';
import LaptopForm from '../../container/Form/LaptopForm';
import Store from '../Store/Store';
import Laptop from '../../container/Laptop/Laptop';
import EditLaptop from '../../container/Form/EditLaptop';
import Contact from '../../container/Contact/Contact';
import SignIn from '../SignIn/SignIn';
import SearchResults from '../../container/SearchResults/SearchResults';
import Footer from '../Footer/Footer';

const page = (props) => {
    const {authenticated} = props;
    const authVerified = authenticated.uid ? <AuthorizedNavBar/> : '';
    return(
        <div>
            <Toolbar/>
            {authVerified}
            <Switch>
                <Route exact path="/" component={Store}/>
                <Route path="/add" component={LaptopForm}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/laptops/:id" exact component={Laptop}/>
                <Route path='/laptops/edit/:id' component={EditLaptop}/>
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


const mapStateToProps = (state) => {
    return{
        authenticated: state.authenticated
    }
};

export default connect(mapStateToProps)(page);