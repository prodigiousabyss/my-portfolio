import { Home } from "./Svg/Home";
import { Rocket } from "./Svg/Rocket";
import { Bulb } from "./Svg/Bulb";
import { Twitter } from "./Svg/Twitter";
import { Behance } from "./Svg/Behance";
import { Cross } from "./Svg/Cross";
import { next } from "./Svg/next";
import { previous } from "./Svg/previous";
import { Code } from "./Svg/Code";
import { Github } from "./Svg/Github";

const iconMap = {
  Home: Home,
  Rocket: Rocket,
  Bulb: Bulb,
  Twitter: Twitter,
  Behance: Behance,
  Cross: Cross,
  next: next,
  previous: previous,
  Code: Code,
  Github: Github,
};

export const Icon = ({ name, ...props }) => {
  const Comp = iconMap[name];

  return (
    <div>
      <Comp {...props} />
    </div>
  );
};
