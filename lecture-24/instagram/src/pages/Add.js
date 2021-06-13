import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import ImageUploader from "react-images-upload";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function Add() {
  let [picture, setPicture] = useState();

  let getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          blob.name = fileName;
          resolve(blob);
        },
        "image/png",
        1
      );
    });
  };

  const [crop, setCrop] = useState({
    unit: "px", // default, can be 'px' or '%'
    aspect: 1,
    x: 20,
    y: 20,
    width: 100,
    height: 100,
  });

  let onDrop = function (pictures) {
    let pic = pictures[pictures.length - 1];
    setPicture(URL.createObjectURL(pic));
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

      {picture && (
        <ReactCrop
          src={picture}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      )}

      {picture && (
        <Button
          variant="contained"
          onClick={async function () {
            let img = document.getElementsByClassName("ReactCrop__image")[0];
            let result = await getCroppedImg(img, crop, "cropped.png");
            setPicture(URL.createObjectURL(result));
          }}
        >
          Crop
        </Button>
      )}
    </Box>
  );
}
