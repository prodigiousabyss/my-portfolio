import { Home } from "./Svg/Home";
import { Code } from "./Svg/Code";
import { Designs } from "./Svg/Designs";

import { Behance } from "./Svg/Behance";
import { Github } from "./Svg/Github";
import { LinkedIn } from "./Svg/LinkedIn";

import { Cross } from "./Svg/Cross";
import { next } from "./Svg/next";
import { previous } from "./Svg/previous";

const iconMap = {
  Home,
  Designs,
  Code,
  Behance,
  Github,
  LinkedIn,
  Cross,
  next,
  previous,
};

export const Icon = ({ name, ...props }) => {
  const Comp = iconMap[name];

  return (
    <div>
      <Comp {...props} />
    </div>
  );
};
