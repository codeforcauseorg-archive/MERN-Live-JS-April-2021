import { Box } from "@material-ui/core";
import { useState } from "react";
import ImageUploader from "react-images-upload";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'

export default function Add() {
  let [picture, setPicture] = useState();
  const [crop, setCrop] = useState({
    unit: "px", // default, can be 'px' or '%'
    aspect: 1,
    x: 20,
    y: 20,
    width: 100,
    height: 100,
  });

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

      {/* {picture && (
        <img
          src={URL.createObjectURL(picture)}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      )} */}

      <ReactCrop
        src="/logo512.png"
        crop={crop}
        onChange={(newCrop) => setCrop(newCrop)}
      />
    </Box>
  );
}
