import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[51px] md:h-auto ml-3.5 md:ml-[0] mr-[213px] mt-[13px] rounded-[50%] w-[51px]"
          src="images/img_ellipse11.png"
          alt="ellipseEleven"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              flexDirection: "column",
              marginTop: "2px",
              paddingBottom: "2px",
              color: "#202020",
              fontFamily: "Roboto",
              paddingLeft: "2px",
              paddingRight: "2px",
            },
          }}
          className="flex flex-col items-center justify-start md:pr-10 pr-14 sm:pr-5 w-full"
        >
          <MenuItem>
            <div className="flex items-end justify-start md:px-10 sm:px-5 md:w-full">
              <Text className="font-bold text-xl">Hi Reader,</Text>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-end justify-start md:w-full">
              <Text className="mr-[7px] text-base">Here’s your News!</Text>
            </div>
          </MenuItem>
        </Menu>
        <div className="bg-white-A700 flex flex-col gap-[21px] items-center justify-start mt-[43px] p-[17px] rounded-lg shadow-bs2 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
            size="txtRobotoBold28"
          >
            Have a Feedback?
          </Text>
          <Button
            className="!text-gray-900_01 cursor-pointer font-bold font-roboto leading-[normal] mb-0.5 min-w-[229px] rounded-lg text-center text-xl"
            color="deep_orange_200"
            size="sm"
            variant="fill"
          >
            We’re Listening!
          </Button>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
