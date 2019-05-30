import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8Yl_5BUioXS1s7amGt-ZoBrBe379yEnk",
    authDomain: "remark-d6a2e.firebaseapp.com",
    databaseURL: "https://remark-d6a2e.firebaseio.com",
    projectId: "remark-d6a2e",
    storageBucket: "remark-d6a2e.appspot.com",
    messagingSenderId: "8252964872",
    appId: "1:8252964872:web:81926289386e42a6"
}

firebase.initializeApp(config);

export default firebase;