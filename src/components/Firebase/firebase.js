import app from "firebase/app";
const config = {
  apiKey: "AIzaSyDJ8q6_9ebodLvEjfQ05jqdMEuTFjSEepc",
  authDomain: "inform-and-connect.firebaseapp.com",
  databaseURL: "https://inform-and-connect.firebaseio.com",
  projectId: "inform-and-connect",
  storageBucket: "inform-and-connect.appspot.com",
  messagingSenderId: "559992552706",
  appId: "1:559992552706:web:eb9c9e54c834734366161b",
};
// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
