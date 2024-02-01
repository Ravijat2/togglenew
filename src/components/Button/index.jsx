import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[24px]" };
const variants = {
  fill: {
    deep_orange_200: "bg-deep_orange-200 shadow-bs1",
    teal_A100: "bg-teal-A100 shadow-bs1 text-gray-900_01",
    white_A700: "bg-white-A700 shadow-bs",
    teal_300: "bg-teal-300 shadow-bs2 text-white-A700",
  },
};
const sizes = { xs: "p-[13px]", sm: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_orange_200",
    "teal_A100",
    "white_A700",
    "teal_300",
  ]),
};

export { Button };
