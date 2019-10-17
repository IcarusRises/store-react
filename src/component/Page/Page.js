import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// LayOut
import AuthorizedNavBar from '../AuthorizedNavBar/AuthorizedNavBar';
import Toolbar from '../Header/Toolbar/Toolbar';
import Footer from '../Footer/Footer';
// Pages
import Purchase from '../../container/Purchase/Purchase';
import LaptopForm from '../../container/Form/LaptopForm';
import Store from '../Store/Store';
import Laptop from '../../container/Laptop/Laptop';
import EditLaptop from '../../container/Form/EditLaptop';
import Contact from '../../container/Contact/Contact';
import SignIn from '../SignIn/SignIn';
import SearchResults from '../../container/SearchResults/SearchResults';
import AboutUs from '../AboutUs/AboutUs';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Terms from '../Terms/Terms';
import Brands from '../../container/Brand/Brand';
import BrandsPage from '../../container/Brand/BrandsPage';


const page = (props) => {
    const {authenticated} = props;
    const authVerified = authenticated.uid ? <AuthorizedNavBar/> : '';
    return(
        <Fragment>
            <Toolbar/>
            {authVerified}
            <Switch>
                <Route exact path="/" component={Store}/>
                <Route path='/purchase' component={Purchase}/>
                <Route path="/add" component={LaptopForm}/>
                <Route path='/laptops/brand/:brand' component={Brands}/>
                <Route path="/contact" component={Contact}/>
                <Route path='/laptops/brand' exact component={BrandsPage}/>
                <Route path="/laptops/:id" exact component={Laptop}/>
                <Route path='/laptops/edit/:id' component={EditLaptop}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/privacy' component={PrivacyPolicy}/>
                <Route path="/terms-conditions" component={Terms}/>
                <Route path='/aboutus' component={AboutUs}/>
                <Route path='/search' render={(props) => 
                    <SearchResults {...props} />
                }/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </Fragment>
    );
}


const mapStateToProps = (state) => {
    return{
        authenticated: state.authenticated
    }
};

export default connect(mapStateToProps)(page);