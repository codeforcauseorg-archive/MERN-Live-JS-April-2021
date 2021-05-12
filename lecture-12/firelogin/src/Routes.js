import { Switch, Route } from "react-router-dom";
import AuthGaurd from "./components/AuthGaurd";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <AuthGaurd>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGaurd>
      </Route>
    </Switch>
  );
}
