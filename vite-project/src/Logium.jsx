import { Typography } from "@mui/material";
import logium from "../assets/logium.svg";
export default function Logium() {
  let text = `This is my Bachelors thesis. We developed a proof editor for natural deduction that can handle both propositional and first-order logic. 
I have enjoyed the project greatly and learned a lot. I was chosen to developed the webpage, because of my previous knowledge in React. I did this together with one more in the group. 
We used Javascript as programming language with the React framework. You can find the website here:  `;
let url = "https://logium.chalmers.it/"
  return (
    <div style={{ display: "grid" }}>
      <img
        style={{ maxWidth: "100%" }}
        src={logium}
        alt="logium, proof editor"
      />
      <div style={{ backgroundColor: "#1e1e1e" }}>
        <Typography style={{ whiteSpace: "pre-wrap" }}>
          {text}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </Typography>
      </div>
    </div>
  );
}
