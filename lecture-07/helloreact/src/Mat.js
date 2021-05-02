import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";

function Mat() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%"
            }}
          >
            <Typography
              style={{
                flexGrow: 1,
              }}
              variant="h5"
            >
              Home Page
            </Typography>
            <Typography >Login</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Mat };