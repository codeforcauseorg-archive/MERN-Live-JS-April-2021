
import { Fragment } from "react";
import ButtonAppBar from "../components/ButtonAppBar";

export default function MainLayout({ children }) {

  return (
    <Fragment>
      <ButtonAppBar/>
      {children}
    </Fragment>
  );
}
