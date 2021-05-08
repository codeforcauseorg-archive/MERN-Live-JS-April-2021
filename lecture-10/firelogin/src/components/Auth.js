import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";

import firebase from "../utils/firebase";

export default function ({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return <h1>Trying to login</h1>;
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
