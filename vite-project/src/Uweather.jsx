import home from "../assets/uweather_home.svg";
import search from "../assets/uweather_search 1.svg";
import stockholm from "../assets/uweather_stock 1.svg";
import climate from "../assets/uweather_climate 1.svg";
import cause from "../assets/uweather_cause_of_climate 1.svg";
import { Typography } from "@mui/material";
export default function Uweather(){
    let text = `Some classmates and I made this application for a course in Agile-development. The application gathers data from several weather stations in Sweden
and calculates a confidence interval for what the temperature is going to be. I was responsible for calculating the confidence interval and development of the application itself.
The application is developed in Kotlin using Android Studio.`
    return(
        <div style={{display : "grid"}}>

        
        <div style={{display : "flex", maxWidth : "100%"}}>
            <img src={home} alt="uweather-home-page"  style={{padding : "1%", maxWidth : "23%"}}/>
            <img src = {search} alt = "uweather-search" style={{padding : "1%", maxWidth : "23%"}}/>
            <img src = {stockholm} alt = "uweather-search-stockholm" style={{padding : "1%", maxWidth : "23%"}}/>
            <img src = {climate} alt = "uweather-search-climate-change" style={{padding : "1%", maxWidth : "23%"}}/>
            
        </div>
        <div style={{backgroundColor : "#1e1e1e"}}>
        <Typography style={{whiteSpace: "pre-wrap"}}>{text}</Typography>
        </div>
        
        </div>
        
    )
}