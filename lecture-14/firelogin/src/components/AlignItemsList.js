import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ contacts }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {contacts.map(function (contact, idx) {
        console.log(contact);
        return (
          <div>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.picture} />
              </ListItemAvatar>
              <ListItemText primary={contact.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  );
}
