import { Button, Typography } from "@mui/material";
import profilePicture from "../assets/profilePicture.jpeg";
export default function Contact() {
  return (
    <div style={{display : "flex"}}>
      <Typography>THIS IS MY CONTACT!</Typography>
      <img src={profilePicture} style= {{scale : "0.6", position : "absolute", right : "0", paddingBottom : "-300px"}}/>;
    </div>
  );
}
