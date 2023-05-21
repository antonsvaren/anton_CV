import Home from "./home.jsx";
import Page from "./pagestate.jsx";
import Portfolio from "./portfolio.jsx";

export default function Pagecontent({page}) {
  let res;
  switch (page) {
    case Page.HOME:
      res = <Home />;
      break;
    case Page.PORTFOLIO:
        res = <Portfolio/>
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
