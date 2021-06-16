import React from "react";
import { useState } from "react";
import InstaAddStepper from "../components/InstaAddStepper";

let PostContext = React.createContext();

function Add() {
  let emptyPost = {
    imageId: undefined,
    description: undefined,
  };

  let [postData, setPostData] = useState(emptyPost);

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      <InstaAddStepper />
    </PostContext.Provider>
  );
}

export { PostContext, Add };
