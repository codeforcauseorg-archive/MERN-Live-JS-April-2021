import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import { UserContext } from "../App";
import { Button } from "@material-ui/core";
import firebase from "../utils/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  let { user } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Chat Room
          </Typography>
          <Button style={{
            color: "#ffffff",
            textTransform: "capitalize"
          }}
            onClick={function () {
              firebase.auth().signOut();
            }}
          >
            Hello {user.displayName}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
