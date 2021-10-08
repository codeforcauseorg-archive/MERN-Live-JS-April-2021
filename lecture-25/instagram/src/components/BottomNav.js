import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    >
      <BottomNavigationAction label="home" value="/" icon={<RestoreIcon />} />
      <BottomNavigationAction
        label="search"
        value="/search"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="add"
        value="/add"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="favourite"
        value="/favourite"
        icon={<FolderIcon />}
      />
      <BottomNavigationAction
        label="profile"
        value="/profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
