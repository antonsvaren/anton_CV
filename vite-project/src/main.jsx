import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Topbar from "./topbar";
import { Typography } from "@mui/material";
import Pagecontent from "./pagecontent";
import Page from "./pagestate";

function Main() {
  const [page, setPage] = useState(Page.HOME);
  return (
    <React.StrictMode>
      <div style={{display : "grid : auto-flow", height :"100%"}}>
        <div>
          <Topbar setPage={setPage} />
        </div>
        <div>
        <Typography
            variant="h3"
            fontFamily={"Courier New"}
            style={{
              
              // border: "solid green 2px",
              marginBottom : "5vh",
              paddingLeft: "100px",
              // paddingRight: "100px",
              // position: "absolute",
              // left: "0",
              // paddingTop: "100px",
              // top: "0",
            }}
          >
            Anton Svarén.
          </Typography>
        </div>
          
        
        <div style={{border : "solid yellow 0px", width : "99.8vw", height : "70vh"}}>
          <Pagecontent page={page} />
        </div>
      </div>
    </React.StrictMode>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
