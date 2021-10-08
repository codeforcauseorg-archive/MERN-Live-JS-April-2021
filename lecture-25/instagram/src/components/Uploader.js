import { Box, Button } from "@material-ui/core";
import { useContext, useState } from "react";
import ImageUploader from "react-images-upload";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "../utils/axios";
import { PostContext } from "../pages/Add";

export default function Uploader({ setActiveStep }) {
  let [picture, setPicture] = useState();
  let [content, setContent] = useState();
  let { postData, setPostData } = useContext(PostContext);

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

    var dataURL = canvas.toDataURL("image/png");

    let content = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    setContent(content);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            blob.name = fileName;
            resolve(blob);
          } else {
            reject("failed");
          }
        },
        "image/png",
        1
      );
    });
  };

  const [crop, setCrop] = useState({
    unit: "px", // default, can be 'px' or '%'
    aspect: 1,
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
            getCroppedImg(img, crop, "cropped.png")
              .then((result) => {
                setPicture(URL.createObjectURL(result));
              })
              .catch(() => {});
          }}
        >
          Crop
        </Button>
      )}

      <Button
        onClick={function () {
          axios
            .post("/images/", {
              content,
            })
            .then((res) => {
              let copy = { ...postData };
              copy.imageId = res.data._id;
              setPostData(copy);
              setActiveStep((step) => step + 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        variant="contained"
        disabled={!content}
      >
        {" "}
        Next
      </Button>
    </Box>
  );
}
