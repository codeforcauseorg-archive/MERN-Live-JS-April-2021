import { Box } from "@material-ui/core";
import { useState } from "react";
import ImageUploader from "react-images-upload";

export default function Add() {
  let [picture, setPicture] = useState();

  let onDrop = function (pictures) {
    console.log(pictures[pictures.length - 1]);
    setPicture(pictures[pictures.length - 1]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />

      {picture && <img src={URL.createObjectURL(picture)} alt="something" />}
    </Box>
  );
}
