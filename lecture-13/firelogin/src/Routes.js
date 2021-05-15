import { Switch, Route } from "react-router-dom";
import AuthGaurd from "./components/AuthGaurd";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Draft from "./pages/Draft";
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
      <Route path="/inbox" exact>
        <AuthGaurd>
          <MainLayout>
            <Inbox />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/draft" exact>
        <AuthGaurd>
          <MainLayout>
            <Draft />
          </MainLayout>
        </AuthGaurd>
      </Route>
    </Switch>
  );
}
