import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID
  };

  const uiConfig = ({
      signInSuccessUrl: '/',
      signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
  });


firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const startFirebaseUI = function (elementId){
    ui.start(elementId, uiConfig)
}

export default startFirebaseUI;



