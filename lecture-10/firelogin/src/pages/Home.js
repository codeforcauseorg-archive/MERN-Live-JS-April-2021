import { useContext } from "react";
import { UserContext } from "../App";

import firebase from "../utils/firebase";

export default function () {
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
    </div>
  );
}
