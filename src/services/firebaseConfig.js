
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCgrOCjXdE1KZb_ME1YZTb9MqqirQaS-dU",
    authDomain: "reactalex-9d443.firebaseapp.com",
    databaseURL: "https://reactalex-9d443-default-rtdb.firebaseio.com",
    projectId: "reactalex-9d443",
    storageBucket: "reactalex-9d443.appspot.com",
    messagingSenderId: "606275741813",
    appId: "1:606275741813:web:bbac461248ff00b808703c"
};


const appFb = initializeApp(firebaseConfig);

export default appFb;