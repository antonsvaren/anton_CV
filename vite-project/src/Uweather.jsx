import home from "../assets/uweather_home.svg";
import search from "../assets/uweather_search 1.svg";
import stockholm from "../assets/uweather_stock 1.svg";
import climate from "../assets/uweather_climate 1.svg";
import { Typography } from "@mui/material";
export default function Uweather(){
    let text = `My classmates and I collaborated on developing an application as part of our Agile development course. 
Our application focuses on gathering data from various weather stations in Sweden to provide accurate temperature predictions. 
In particular, I took charge of calculating the confidence interval and overseeing the overall development of the application.

To bring our idea to life, we utilized Kotlin programming language and Android Studio as our development platform. 
This combination allowed us to create a robust and user-friendly application that delivers reliable temperature forecasts based on the gathered data from multiple weather stations across Sweden.`
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