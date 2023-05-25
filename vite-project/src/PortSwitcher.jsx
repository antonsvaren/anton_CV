import Logium from "./Logium";
import Content from "./portfolio_content";
import Uweather from "./Uweather";
import Game from "./Game";

export default function PortSwitcher({ content }) {
  let res;
  switch (content) {
    case Content.LOGIUM:
      res = <Logium />;
      break;
    case Content.UWEATHER:
      res = <Uweather />;
      break;
    case Content.GAME:
      res = <Game/>;
      break;
    default:
      <Logium />;
      break;
  }
  return res;
}
