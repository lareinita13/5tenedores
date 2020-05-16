import firebase from "firebase/app";

const firebaseconfig = {
  apiKey: "AIzaSyC_9cTo_bv9eMIl6pB5PFYZl-3ByBzQYVA",
  authDomain: "tenedores-46c2a.firebaseapp.com",
  databaseURL: "https://tenedores-46c2a.firebaseio.com",
  projectId: "tenedores-46c2a",
  storageBucket: "tenedores-46c2a.appspot.com",
  messagingSenderId: "314837203630",
  appId: "1:314837203630:web:5b0ad7372933966635cb3f"
}
 
export const firebaseapp = firebase.initializeApp(firebaseconfig);
