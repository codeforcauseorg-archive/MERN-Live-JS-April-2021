import logo from "./logo.svg";
import "./App.css";

import firebase from "./utils/firebase";
import { useEffect } from "react";
import Login from "./pages/Login";

function App() {
  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
    });
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
