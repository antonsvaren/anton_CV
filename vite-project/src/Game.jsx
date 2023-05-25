import { Typography } from "@mui/material";
import Youtube from "react-youtube";

export default function Game() {
  const videoUrl =
    "https://www.youtube.com/watch?v=iEQHztOJEM0&ab_channel=AntonSvar%C3%A9n";
  const videoId = new URLSearchParams(new URL(videoUrl).search).get("v");
  const text = `I created this game with two others in a Game development course. 
We used C#, Unity for the game development.`;
  return (
    <div>
      <Youtube videoId={videoId} />
      <Typography style={{ whiteSpace: "pre-wrap" }}>{text}</Typography>
    </div>
  );
}
