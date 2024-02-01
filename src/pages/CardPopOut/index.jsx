import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const CardPopOutPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 font-roboto h-[900px] mx-auto relative shadow-bs2 w-full">
        <div className="absolute flex flex-col md:gap-10 gap-[67px] h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[5%] w-[63%]">
          <div className="md:gap-5 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Sed volutpat vitae id eleifend. Commodo...
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-xl w-full"
                  size="txtRobotoRegular20Black900"
                >
                  Interdum pretium porttitor nibh cursus...
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-[21px] object-cover rounded-tl rounded-tr w-full"
                  src="images/img_rectangle17.png"
                  alt="rectangleSeventeen"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Risus natoque porta eget vestibulum...
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-xl w-full"
                  size="txtRobotoRegular20Black900"
                >
                  Nec facilisis duis venenatis nulla porta...
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-[21px] object-cover rounded-tl rounded-tr w-full"
                  src="images/img_rectangle19.png"
                  alt="rectangleNineteen"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Magnis quisque non ullamcorper mus...
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-xl w-full"
                  size="txtRobotoRegular20Black900"
                >
                  Amet vitae rhoncus nisi tellus eget ut vulputate...
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-[21px] object-cover rounded-tl rounded-tr w-full"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Eu pellentesque aenean vel commodo in. Nibh...
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-xl w-full"
                  size="txtRobotoRegular20Black900"
                >
                  Nullam tempus nisl laoreet arcu sit eget...
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-[21px] object-cover rounded-tl rounded-tr w-full"
                  src="images/img_rectangle23.png"
                  alt="rectangleTwentyThree"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Ut vestibulum amet orci lacus potenti eu cras...
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-xl w-full"
                  size="txtRobotoRegular20Black900"
                >
                  Nulla gravida id quam rutrum. Aenean tempus..
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-[21px] object-cover rounded-tl rounded-tr w-full"
                  src="images/img_rectangle25.png"
                  alt="rectangleTwentyFive"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Pretium duis dolor morbi rhoncus eleifend. Puru..
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-xl w-full"
                  size="txtRobotoRegular20Black900"
                >
                  At vulputate ultricies sed euismod nulla. Sed..
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-[21px] object-cover rounded-tl rounded-tr w-full"
                  src="images/img_rectangle27.png"
                  alt="rectangleTwentySeven"
                />
              </div>
            </div>
          </div>
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
            <div className="bg-blue_gray-50 flex flex-row gap-[30px] items-center justify-start pr-10 sm:pr-5 rounded-lg shadow-bs1 w-[88%] md:w-full">
              <div className="bg-teal-A100 flex flex-col items-end justify-start p-[18px] rounded-bl-lg rounded-tl-lg shadow-bs1 w-[62%]">
                <Img
                  className="h-[42px] mr-1"
                  src="images/img_megaphone_gray_900_01_42x55.svg"
                  alt="megaphone"
                />
              </div>
              <Img
                className="h-[27px]"
                src="images/img_megaphone_gray_500.svg"
                alt="megaphone_One"
              />
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

export default CardPopOutPage;
