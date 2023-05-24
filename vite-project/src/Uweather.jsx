import home from "../assets/uweather_home.svg";
import search from "../assets/uweather_search 1.svg";
import stockholm from "../assets/uweather_stock 1.svg";
import climate from "../assets/uweather_climate 1.svg";
import cause from "../assets/uweather_cause_of_climate 1.svg";
export default function Uweather(){
    return(
        <div style={{display : "flex"}}>
            <img src={home} alt="uweather-home-page"  style={{padding : "15px"}}/>
            <img src = {search} alt = "uweather-search" style={{padding : "15px"}}/>
            <img src = {stockholm} alt = "uweather-search-stockholm" style={{padding : "15px"}}/>
            <img src = {climate} alt = "uweather-search-climate-change" style={{padding : "15px"}}/>
            {/* <img src = {cause} alt = "uweather-search-climate-cause"/> */}
        </div>
        
    )
}