import Logium from "./Logium";
import Content from "./portfolio_content";
import Uweather from "./Uweather";

export default function PortSwitcher({ content }) {
  let res;
  switch (content) {
    case Content.LOGIUM:
      res = <Logium />;
      break;
    case Content.UWEATHER:
      res = <Uweather />;

    default:
      <Logium />;
  }
  return res;
}
