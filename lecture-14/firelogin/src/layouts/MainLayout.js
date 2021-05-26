import { Box } from "@material-ui/core";
import { Fragment } from "react";
import ButtonAppBar from "../components/ButtonAppBar";

export default function MainLayout({ children }) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <ButtonAppBar />
      {children}
    </Box>
  );
}
