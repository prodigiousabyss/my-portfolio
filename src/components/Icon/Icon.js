import { Home } from "./Svg/Home";
import { Rocket } from "./Svg/Rocket";
import { Bulb } from "./Svg/Bulb";
import { Twitter } from "./Svg/Twitter";
import { Behance } from "./Svg/Behance";
import { Cross } from "./Svg/Cross";

const iconMap = {
  Home: Home,
  Rocket: Rocket,
  Bulb: Bulb,
  Twitter: Twitter,
  Behance: Behance,
  Cross: Cross,
};

export const Icon = ({ name, style }) => {
  const Comp = iconMap[name];

  return (
    <div>
      <Comp style={style} />
    </div>
  );
};
