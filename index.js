// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCldTzY-gsmBxW5wB7-VTz72gMQ8A4rAwI",
  authDomain: "http5214-11c14.firebaseapp.com",
  projectId: "http5214-11c14",
  storageBucket: "http5214-11c14.appspot.com",
  messagingSenderId: "164546421644",
  appId: "1:164546421644:web:f61814cdbc661fa4606ca9",
  measurementId: "G-VCM5VZ7V6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const messages = ref(database, "/messages");
onValue(
  messages,
  (snapshot) => {
    //console.log(snapshot);
    const ul = document.getElementById("messages");
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childValue = childSnapshot.val();
      console.log(childKey);
      console.log(childValue);
      const text = document.createTextNode(childValue.message);
      const li = document.createElement("li");
      li.appendChild(text);
      //ul.appendChild(li);
      ul.innerHTML += `<h2>${childValue.message}</h2>`;
      ul.innerHTML += `<h2>${childValue.name}</h2>`;
    });
  },
  {
    onlyOnce: false,
  }
);
