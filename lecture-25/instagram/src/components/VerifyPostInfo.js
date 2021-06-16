import { Box, Button, Typography } from "@material-ui/core";
import { useContext } from "react";

import axios from "../utils/axios";
import { PostContext } from "../pages/Add";
import { useHistory } from "react-router-dom";

export default function VerifyPostInfo() {
  let { postData } = useContext(PostContext);
  let history = useHistory();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        width="100px"
        height="100px"
        alt="something"
        src={`http://localhost:5000/images/${postData.imageId}`}
      />

      <Typography>{postData.description}</Typography>

      <Button
        onClick={function () {
          axios
            .post("/posts/", postData)
            .then((res) => {
              history.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
}
