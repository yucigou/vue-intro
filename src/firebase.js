import {
  initializeApp
} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyD1TS-CGBjd76ersgXpe-WEuOHfLnO-eOw",
  authDomain: "calorie-calculator-40678.firebaseapp.com",
  databaseURL: "https://calorie-calculator-40678.firebaseio.com",
  projectId: "calorie-calculator-40678",
  storageBucket: "",
  messagingSenderId: "433036388378"
});

export const db = app.database();
export const namesRef = db.ref('names');
