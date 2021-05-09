import { Switch, Route, Link } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <Auth>
          <Home />
        </Auth>
      </Route>
    </Switch>
  );
}
