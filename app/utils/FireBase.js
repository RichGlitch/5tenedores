import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCli5FQ-1xLH4b_jPG3RGpikWoPtGb9YRM",
    authDomain: "tenedores-8a19d.firebaseapp.com",
    databaseURL: "https://tenedores-8a19d.firebaseio.com",
    projectId: "tenedores-8a19d",
    storageBucket: "tenedores-8a19d.appspot.com",
    messagingSenderId: "393158820630",
    appId: "1:393158820630:web:4834fd5b45443751898637"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig); 