import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Page from "./pagestate";

export default function Topbar({ setPage }) {
  const sxStyle = {
    color: "#39ff14",
    "&:hover": { backgroundColor: "rgba(57, 255, 20, 0.2)" },
    fontFamily: "Courier New",
  };
  return (
    <div>
      <AppBar
        position="absolute"
        elevation={0}
        style={{
          backgroundColor: "transparent",
          height: "10vh",
          // border: "solid red 2px",
        }}
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              marginLeft : "50%"
            }}
          >
            <div className="appbar-content">
              <Button sx={sxStyle} onClick={() => setPage(Page.HOME)}>
                <Typography fontFamily={"Courier New"} variant="h6">
                  ABOUT
                </Typography>
              </Button>
            </div>
            <div className="appbar-content">
              <Button sx={sxStyle} onClick={() => setPage(Page.PORTFOLIO)}>
                <Typography fontFamily={"Courier New"} variant="h6">
                  PORTFOLIO
                </Typography>
              </Button>
            </div>
            <div className="appbar-content">
              <a href="https://github.com/antonsvaren" target="_blank">
                <Button sx={sxStyle}>
                  <Typography fontFamily={"Courier New"} variant="h6">
                    GITHUB
                  </Typography>
                </Button>
              </a>
            </div>
            <div className="appbar-content">
              <a href="https://www.linkedin.com/in/anton-svar%C3%A9n-76827b142/" target="_blank">
                <Button sx={sxStyle}>
                  <Typography fontFamily={"Courier New"} variant="h6">
                    Linkedin
                  </Typography>
                </Button>
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
