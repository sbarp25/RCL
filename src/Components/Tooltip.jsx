import React from "react";
import propTypes from "prop-types";
import { className } from "./classNames";

const Tooltip = ({ position, content, children }) => (
  <div id="tooltip" className="raltive cursor-pointer">
    <div className="mx-2 y-1">{children}</div>
    <span
      className={
        ("absolute hidden group-hover:inline inner-block bg-neutral-900 text-white text-xs p-2 whitespace-nowrap rounded",
        position === "top"
          ? "left-1/2 -translate-x-1/2 bottom-[cal(100%+5px)]"
          : "",
          position === "bottom"
          ? "left-1/2 -translate-x-1/2 top-[cal(100%+5px)]"
          : "",
        )
      }
    >
      {content}
    </span>
    <span
      className={className
        ("absolute hidden group-hover:inline inner-block border-[6px]",
        position === "top" ? "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-neutral-900" : "",
        position === "bottom" ? "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-b-0 border-neutral-900" : "",)
      }
    ></span>
  </div>
);
Tooltip.propTypes={
  position :propTypes.oneOf(["top","bottom"]).isRequired,
  content: propTypes.node.isRequired,
  children: propTypes.node.isRequired
}

export default Tooltip;
