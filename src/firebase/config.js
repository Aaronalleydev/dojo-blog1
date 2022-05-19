import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXzOhspbpf75pg71QVKH3oNE3lpLK_Opo",
    authDomain: "udemy-vue-firebase-site-dc4fb.firebaseapp.com",
    projectId: "udemy-vue-firebase-site-dc4fb",
    storageBucket: "udemy-vue-firebase-site-dc4fb.appspot.com",
    messagingSenderId: "500079653509",
    appId: "1:500079653509:web:2323a42884125f0388afec"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init firestore servcice

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }