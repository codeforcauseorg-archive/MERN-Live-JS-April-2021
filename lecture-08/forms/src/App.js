import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import axios from 'axios';

let useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    background: "#cccccc",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    background: "#ffffff",
    margin: "10px",
  },
  basicInput: {
    margin: "20px",
    width: "600px",
  },
});

function App() {
  let classes = useStyle();

  let [formData, setFormData] = useState({});

  let fields = [
    {
      name: "name",
      title: "Name",
    },
    {
      name: "email",
      title: "Email",
    },
    {
      name: "address",
      title: "Address",
    },
    {
      name: "phone",
      title: "Phone Number",
    },
  ];

  let handleChange = function (event) {
    console.log(event.target.name, event.target.value);

    let updated = { ...formData };
    updated[event.target.name] = event.target.value;
    setFormData(updated);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h1">My Form</Typography>

      {fields.map(function (item, idx) {
        return (
          <Box key={idx} className={classes.formBox}>
            <TextField
              className={classes.basicInput}
              label={item.title}
              name={item.name}
              value={formData[item.name]}
              onChange={handleChange}
            />
          </Box>
        );
      })}

      <Button
        variant="contained"
        color="primary"
        onClick={function () {
          axios.post("http://localhost:5000/submit", formData).then((response)=>{
            console.log("Success", response);
          }).catch((error)=>{
            console.log("Error", error);
          });
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;
