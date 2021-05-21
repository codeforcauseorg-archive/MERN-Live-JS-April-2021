import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#ECE5DD",
  },
  message: {
    width: "50%",
    backgroundColor: "#ffffff",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  },
}));

export default function SimpleList({ messages }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {messages.map(function (item, idx) {
        return (
          <div className={classes.message}>
            <p>{item.sender.name}</p>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
