import React from "react";

const sizeClasses = {
  txtRobotoBold20Black900: "font-bold font-roboto",
  txtRobotoBold28: "font-bold font-roboto",
  txtRobotoRegular16Black900: "font-normal font-roboto",
  txtRobotoBold20Gray600: "font-bold font-roboto",
  txtRobotoRegular16Red600: "font-normal font-roboto",
  txtRobotoBold20WhiteA700: "font-bold font-roboto",
  txtRobotoBold20Gray90001: "font-bold font-roboto",
  txtRobotoRegular20Black900: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoRegular16Gray90001: "font-normal font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
