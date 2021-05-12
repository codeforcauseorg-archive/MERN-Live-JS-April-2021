import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";

import firebase from "../utils/firebase";

export default function Home() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1> This is a home page for {user.displayName}</h1>
      <button
        onClick={function () {
          firebase.auth().signOut();
        }}
      >
        Logout
      </button>
      <button
        onClick={function () {
          axios.get("http://localhost:5000/alive").then(function (response) {
            console.log(response);
          });
        }}
      >
        I am Alive
      </button>
    </div>
  );
}
