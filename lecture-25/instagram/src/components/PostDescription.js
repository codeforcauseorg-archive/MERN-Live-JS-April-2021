import { Box, Button, TextField } from "@material-ui/core";
import { useContext, useState } from "react";

import axios from "../utils/axios";
import { PostContext } from "../pages/Add";

export default function PostDescription({ setActiveStep }) {
  let { postData, setPostData } = useContext(PostContext);
  let [description, setDescription] = useState("");

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        width="100px"
        height="100px"
        alt="something"
        src={`http://localhost:5000/images/${postData.imageId}`}
      />

      <TextField
        id="standard-helperText"
        label="Post Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Button
        onClick={function () {
          let copy = { ...postData };
          copy.description = description;
          setPostData(copy);
          setActiveStep((step) => step + 1);
        }}
        variant="contained"
        disabled={!description}
      >
        Next
      </Button>
    </Box>
  );
}
