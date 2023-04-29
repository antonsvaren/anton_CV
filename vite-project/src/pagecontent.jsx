import Home from "./home.jsx";
import Page from "./pagestate.jsx";
import Portfolio from "./portfolio.jsx";
// import About from "./about.jsx";
import Contact from "./contact.jsx";

export default function Pagecontent({page}) {
  let res;
  switch (page) {
    case Page.HOME:
      res = <Home />;
      break;
    case Page.PORTFOLIO:
        res = <Portfolio/>
        console.log("Port")
        break;
    // case Page.ABOUT:
    //     console.log("About")
    //     res = <About/>
    //     break;
    case Page.CONTACT:
        res = <Contact/>
        console.log("Contact")
        break;
    default:
        res = <Home/>
  }
  return(
    <div>
        {res}
    </div>
  )
}
