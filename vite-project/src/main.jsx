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
      <div >
      
        <div style={{ display: "grid : auto-flow", height: "100%" }}  >
          <div style={{marginBottom : "50px"}}>
            <Topbar setPage={setPage} />
          </div>
          <div >
            <Typography
              variant="h3"
              fontFamily={"Courier New"}
              style={{
                // border: "solid green 2px",
                marginBottom: "5vh",
                paddingLeft: "100px",
                marginTop : "5%"
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

          <div style={{ width: "99vw", height: "70vh" }}>
            <Pagecontent page={page} />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
