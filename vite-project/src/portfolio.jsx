import { Typography } from "@mui/material";
import Content from "./portfolio_content";
import { useEffect, useState } from "react";
import PortSwitcher from "./portSwitcher";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Portfolio() {
  const [content, setContent] = useState(Content.LOGIUM);
  const [text, setText] = useState("");
  const prewrittenText = `Hello again! This is my portfolio. Here you can find some of my projects.`;
  var storedPortfolio = sessionStorage.getItem("storedPortfolio");

  useEffect(() => {
    let currentIndex = 1;
    setText("H" + prewrittenText[1]);

    const typingInterval = setInterval(() => {
      if (currentIndex >= prewrittenText.length) {
        clearInterval(typingInterval);
      } else if (currentIndex < prewrittenText.length - 1) {
        setText((prevText) => prevText + prewrittenText[currentIndex]);
        currentIndex++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);
  if (storedPortfolio !== prewrittenText) {
    sessionStorage.setItem("storedPortfolio", text);
  }
  return (
    <div
      style={{ display: "grid", margin: "auto", width: "50%", padding: "10px" }}
    >
      <Typography
        variant="h4"
        style={{
          position: "relative",
          fontFamily: "Courier New",
          marginBottom: "100px",
          width: "50%",
          marginLeft: "25%",
          color: "#39ff14",
        }}
      >
        {storedPortfolio}
      </Typography>
      <div style={{ display: "flex" }}>
        <IconButton
          style={{ color: "white" }}
          onClick={() =>
            setContent(content === 0 ? Content.UWEATHER : Content.LOGIUM)
          }
        >
          <ArrowBackIosIcon />
        </IconButton>
        <PortSwitcher content={content} />
        <IconButton
          style={{ color: "white" }}
          onClick={() =>
            setContent(content === 0 ? Content.UWEATHER : Content.LOGIUM)
          }
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}
