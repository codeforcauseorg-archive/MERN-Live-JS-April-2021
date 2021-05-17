import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";

export default function AuthGaurd({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#999999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img alt="loader" src="https://images.digi.com/loading.gif"></img>
      </div>
    );
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
