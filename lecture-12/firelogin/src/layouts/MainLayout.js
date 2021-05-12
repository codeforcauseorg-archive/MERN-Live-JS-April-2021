import { Box, SwipeableDrawer, Typography } from "@material-ui/core";
import { useState } from "react";
import { Fragment } from "react";
import ButtonAppBar from "../components/ButtonAppBar";
import SimpleList from "../components/SimpleList";

export default function MainLayout({ children }) {
  let [openD, setOpenD] = useState(false);

  return (
    <Fragment>
      <ButtonAppBar setOpenD={setOpenD}/>
      <SwipeableDrawer
        open={openD}
        onClose={() => setOpenD(false)}
        onOpen={() => setOpenD(true)}
      >
        <SimpleList />
      </SwipeableDrawer>
      {children}
    </Fragment>
  );
}
