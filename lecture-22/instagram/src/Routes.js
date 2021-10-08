import { BrowserRouter as Switch, Route } from "react-router-dom";
import AuthGaurd from "./gaurds/AuthGaurd";
import MainLayout from "./layouts/MainLayout";
import Add from "./pages/Add";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <AuthGaurd>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/search" exact>
        <AuthGaurd>
          <MainLayout>
            <Search />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/profile" exact>
        <AuthGaurd>
          <MainLayout>
            <Profile />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/add" exact>
        <AuthGaurd>
          <MainLayout>
            <Add />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/favourite" exact>
        <AuthGaurd>
          <MainLayout>
            <Favourites />
          </MainLayout>
        </AuthGaurd>
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}
