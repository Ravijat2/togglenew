import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";

const ListPopOutPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 font-roboto h-[900px] mx-auto relative shadow-bs2 w-full">
        <div className="absolute flex md:flex-col flex-row gap-[13px] h-max inset-y-[0] items-start justify-center my-auto md:px-5 right-[4%] w-full">
          <div className="flex md:flex-1 flex-col gap-[46px] items-center justify-start w-[94%] md:w-full">
            <List
              className="flex flex-col gap-[17px] items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 p-[26px] sm:px-5 rounded-[16px] shadow-bs2 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start my-0.5 w-[91%] md:w-full">
                  <Img
                    className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                    src="images/img_ellipse1.png"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Urna, tempor aliquet maecenas aliquam risus maecenas ut
                      morbi. Mi...
                    </Text>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Non suscipit sagittis nunc, pharetra. Eget quam facilisi
                      non nunc libero...
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 p-[26px] sm:px-5 rounded-[16px] shadow-bs2 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start my-0.5 w-[93%] md:w-full">
                  <Img
                    className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                    src="images/img_ellipse3.png"
                    alt="ellipseThree"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Eget eu ipsum in sed placerat ante. Tortor porttitor sit
                      adipiscing donec...
                    </Text>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Quam aliquam tincidunt faucibus hendrerit malesuada
                      lectus. Velit.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-[26px] sm:px-5 rounded-[16px] shadow-bs2 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start my-0.5 w-[98%] md:w-full">
                  <Img
                    className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                    src="images/img_ellipse5.png"
                    alt="ellipseFive"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Accumsan amet sit in id arcu odio. Tristique non, quisque
                      commodo viverra...{" "}
                    </Text>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Arcu libero vivamus egestas sit suspendisse eu iaculis
                      velit. Mollis.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-[26px] sm:px-5 rounded-[16px] shadow-bs2 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start my-0.5 w-[97%] md:w-full">
                  <Img
                    className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                    src="images/img_ellipse7.png"
                    alt="ellipseSeven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Nisl est dui egestas turpis. Purus in integer diam
                      ultrices fames lectus eget..
                    </Text>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Porttitor in amet ultrices aliquam pharetra, egestas erat
                      scelerisque.{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 p-[26px] sm:px-5 rounded-[16px] shadow-bs2 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start my-0.5 w-[94%] md:w-full">
                  <Img
                    className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                    src="images/img_ellipse9.png"
                    alt="ellipseNine"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Tortor, gravida fringilla quam cursus ut felis. Amet
                      ultricies tempor enim...
                    </Text>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Vel facilisis purus tincidunt purus quam eleifend et,
                      orci, tortor. Luctus.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-row items-start justify-center w-1/5 md:w-full">
              <Text
                className="bg-white-A700 flex h-[42px] items-center justify-center rounded-[50%] text-center text-gray-600 text-shadow-ts text-xl w-[42px]"
                size="txtRobotoBold20Gray600"
              >
                1
              </Text>
              <Text
                className="bg-gray-400_01 flex h-8 items-center justify-center ml-[22px] my-[5px] rounded-[50%] text-center text-white-A700 text-xl w-8"
                size="txtRobotoBold20WhiteA700"
              >
                2
              </Text>
              <Text
                className="bg-gray-400_01 flex h-8 items-center justify-center ml-[17px] my-[5px] rounded-[50%] text-center text-white-A700 text-xl w-8"
                size="txtRobotoBold20WhiteA700"
              >
                3
              </Text>
              <Img
                className="h-[11px] ml-3 mt-3.5"
                src="images/img_forward.svg"
                alt="forward"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[91px] items-center justify-start md:mt-0 mt-[35px] w-[6%] md:w-full">
            <Button
              className="flex h-[49px] items-center justify-center w-[49px]"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_close.svg"
                alt="close"
              />
            </Button>
            <Button
              className="flex h-[49px] items-center justify-center w-[49px]"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_close.svg"
                alt="close_One"
              />
            </Button>
            <Button
              className="flex h-[49px] items-center justify-center w-[49px]"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_close.svg"
                alt="close_Two"
              />
            </Button>
            <Button
              className="flex h-[49px] items-center justify-center w-[49px]"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_close.svg"
                alt="close_Three"
              />
            </Button>
            <Button
              className="flex h-[49px] items-center justify-center w-[49px]"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_close.svg"
                alt="close_Four"
              />
            </Button>
          </div>
        </div>
        <Sidebar className="!sticky !w-[391px] bg-blue_gray-50 flex h-screen md:hidden justify-start my-auto overflow-auto md:px-5 rounded-br-[32px] rounded-tr-[32px] shadow-bs2 top-[0]">
          <Img
            className="h-[51px] md:h-auto md:ml-[0] ml-[70px] mr-[270px] mt-[89px] rounded-[50%] w-[51px]"
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
                paddingLeft: "2px",
                paddingRight: "2px",
              },
            }}
            className="flex flex-col items-center justify-start w-full"
          >
            <MenuItem>
              <div className="flex items-start justify-start md:px-10 sm:px-5">
                <Text className="font-bold text-xl">Hi Reader,</Text>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex items-end justify-start">
                <Text className="mr-[120px] text-base">Here’s your News!</Text>
              </div>
            </MenuItem>
          </Menu>
          <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start md:ml-[0] mt-[43px] mx-14 p-4 rounded-lg shadow-bs2 w-[72%]">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtRobotoBold28"
            >
              View Toggle
            </Text>
            <div className="bg-blue_gray-50 flex flex-row gap-[27px] items-center justify-center sm:pl-5 pl-[35px] rounded-lg shadow-bs1 w-[88%] md:w-full">
              <Img
                className="h-[34px]"
                src="images/img_megaphone.svg"
                alt="megaphone"
              />
              <div className="bg-teal-A100 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-br-lg rounded-tr-lg shadow-bs1 w-3/5">
                <Img
                  className="h-[35px] ml-1 md:ml-[0]"
                  src="images/img_megaphone_gray_900_01.svg"
                  alt="megaphone_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[21px] items-center justify-start mb-[382px] md:ml-[0] mt-[29px] mx-14 p-[17px] rounded-lg shadow-bs2 w-[72%]">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtRobotoBold28"
            >
              Have a Feedback?
            </Text>
            <div className="bg-teal-A100 flex flex-col items-center justify-end mb-0.5 p-[15px] rounded-lg shadow-bs1">
              <Text
                className="mt-[3px] text-gray-900_01 text-xl"
                size="txtRobotoBold20Gray90001"
              >
                We’re Listening!
              </Text>
            </div>
          </div>
        </Sidebar>
        <div className="absolute bg-black-900_66 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[124px] md:px-10 sm:px-5 w-full">
          <div className="h-[603px] md:h-[651px] my-6 relative w-full">
            <Img
              className="h-[603px] m-auto object-cover rounded-[16px] w-full"
              src="images/img_rectangle31.png"
              alt="rectangleThirtyOne"
            />
            <div className="absolute bg-gray-400_02 h-[352px] inset-y-[0] my-auto right-[1%] rounded-[5px] w-[1%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPopOutPage;
