import { useState } from "react";
import "../Tooltip/Tooltip.css";

export const Tooltip = ({ children, delay, content }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showToolTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideToolTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div onMouseEnter={showToolTip} onMouseLeave={hideToolTip}>
      {active && <div className="tooltip">{content}</div>}
      {children}
    </div>
  );
};
