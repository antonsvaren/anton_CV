import { Typography } from "@mui/material";
import Content from "./portfolio_content";
import { useEffect, useState } from "react";
import PortSwitcher from "./PortSwitcher";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Portfolio() {
  const [content, setContent] = useState(Content.LOGIUM);
  const [text, setText] = useState("");
  const prewrittenText = `Hello again! This is my portfolio. Here you can find some of my projects. `;
  var storedPortfolio = sessionStorage.getItem("storedPortfolio");
  useEffect(() => {
    let currentIndex = 2;
    setText("H" + prewrittenText[1]+ "l");
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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  function handleContent(content, direction){
    
    switch(direction){
      case 0:
        switch(content){
          case 0: 
            content = Content.GAME;
            break;
          case 1: 
            content = Content.LOGIUM;
            break;
          case 2:
            content = Content.UWEATHER;
            break;
        }
        break;
      case 1:
        switch(content){
          case 0:
            content = Content.UWEATHER;
            break;
          case 1: 
            content = Content.GAME;
            break;
          case 2: 
            content = Content.LOGIUM;
            break;
        }
        break;

    }
    return content;
  }
  return (
    <div
      style={{ display: "grid", margin: "auto", width: "100%" }}
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
      <div style={{display:"flex", margin : "auto", maxWidth : "100%", marginBottom : "2%"}}>
        <IconButton
          style={{ color: "white" , height : "40px", marginTop : "25%"}}
          onClick={() =>
            {setContent(handleContent(content, 0)), setTimeout(scrollToBottom, 1000)}
            
          }
        >
          <ArrowBackIosIcon />
        </IconButton>
        <PortSwitcher content={content} />
        <IconButton
          style={{ color: "white" , height : "40px", marginTop : "25%"}}
          onClick={() =>
            {setContent(handleContent(content, 1)), setTimeout(scrollToBottom, 100)}
          }
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}
