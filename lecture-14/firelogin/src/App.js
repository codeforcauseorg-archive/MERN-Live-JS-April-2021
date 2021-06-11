import firebase from "./utils/firebase";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import axios from "axios";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);

      if (user) {
        user
          .getIdToken(true)
          .then(function (idToken) {
            console.log(idToken);
            axios.defaults.headers["Authorization"] = `Bearer ${idToken}`;
          })
          .catch(function (error) {
            // Handle error
          });
      }
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
