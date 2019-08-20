import React, {Component} from 'react';

import startFirebaseUI from '../../Firebase/Firebase';

class SignIn extends Component {

    componentDidMount(){
        startFirebaseUI('#firebaseui-auth-container')
    }

    render(){
        return(
            <div>
                <div id='firebaseui-auth-container'></div>
            </div>
        )
    }
}

export default SignIn