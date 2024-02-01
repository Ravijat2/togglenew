import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, List, Text, TextArea } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const ListLayoutFormPage = () => {
  const [groupfortyfourvalue, setGroupfortyfourvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 font-roboto h-[900px] mx-auto relative shadow-bs2 w-full">
        <div className="flex md:flex-col flex-row gap-[13px] h-full items-start justify-center ml-auto mr-[51px] my-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[46px] items-center justify-start w-[94%] md:w-full">
            <List
              className="flex flex-col gap-[17px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[16px] shadow-bs2 w-full">
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start md:ml-[0] ml-[11px] mt-[13px] w-[88%] md:w-full">
                    <Img
                      className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                      src="images/img_ellipse1.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoBold20"
                      >
                        Urna, tempor aliquet maecenas aliquam risus maecenas ut
                        morbi. Mi...
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-900 text-xl"
                        size="txtRobotoRegular20"
                      >
                        Non suscipit sagittis nunc, pharetra. Eget quam facilisi
                        non nunc libero...
                      </Text>
                      <Text
                        className="mt-2 text-base text-gray-400"
                        size="txtRobotoBold16"
                      >
                        Mon, 21 Dec 2020 14:57 GMT
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[16px] shadow-bs2 w-full">
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start md:ml-[0] ml-[11px] mt-[13px] w-[90%] md:w-full">
                    <Img
                      className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                      src="images/img_ellipse3.png"
                      alt="ellipseThree"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoBold20"
                      >
                        Eget eu ipsum in sed placerat ante. Tortor porttitor sit
                        adipiscing donec...
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-900 text-xl"
                        size="txtRobotoRegular20"
                      >
                        Quam aliquam tincidunt faucibus hendrerit malesuada
                        lectus. Velit.
                      </Text>
                      <Text
                        className="mt-2 text-base text-gray-400"
                        size="txtRobotoBold16"
                      >
                        Mon, 21 Dec 2020 14:57 GMT
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-3.5 rounded-[16px] shadow-bs2 w-full">
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start mt-[13px] w-[95%] md:w-full">
                    <Img
                      className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                      src="images/img_ellipse5.png"
                      alt="ellipseFive"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoBold20"
                      >
                        Accumsan amet sit in id arcu odio. Tristique non,
                        quisque commodo viverra...{" "}
                      </Text>
                      <Text
                        className="mt-1 text-gray-900 text-xl"
                        size="txtRobotoRegular20"
                      >
                        Arcu libero vivamus egestas sit suspendisse eu iaculis
                        velit. Mollis.
                      </Text>
                      <Text
                        className="mt-2 text-base text-gray-400"
                        size="txtRobotoBold16"
                      >
                        Mon, 21 Dec 2020 14:57 GMT
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-3.5 rounded-[16px] shadow-bs2 w-full">
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start mt-[13px] w-[94%] md:w-full">
                    <Img
                      className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                      src="images/img_ellipse7.png"
                      alt="ellipseSeven"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoBold20"
                      >
                        Nisl est dui egestas turpis. Purus in integer diam
                        ultrices fames lectus eget..
                      </Text>
                      <Text
                        className="mt-1 text-gray-900 text-xl"
                        size="txtRobotoRegular20"
                      >
                        Porttitor in amet ultrices aliquam pharetra, egestas
                        erat scelerisque.{" "}
                      </Text>
                      <Text
                        className="mt-2 text-base text-gray-400"
                        size="txtRobotoBold16"
                      >
                        Mon, 21 Dec 2020 14:57 GMT
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-end p-[15px] rounded-[16px] shadow-bs2 w-full">
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start ml-2.5 md:ml-[0] mt-3 w-[92%] md:w-full">
                    <Img
                      className="h-[67px] md:h-auto rounded-[50%] w-[67px]"
                      src="images/img_ellipse9.png"
                      alt="ellipseNine"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoBold20"
                      >
                        Tortor, gravida fringilla quam cursus ut felis. Amet
                        ultricies tempor enim...
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-900 text-xl"
                        size="txtRobotoRegular20"
                      >
                        Vel facilisis purus tincidunt purus quam eleifend et,
                        orci, tortor. Luctus.
                      </Text>
                      <Text
                        className="mt-[7px] text-base text-gray-400"
                        size="txtRobotoBold16"
                      >
                        Mon, 21 Dec 2020 14:57 GMT
                      </Text>
                    </div>
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
        <div className="absolute bg-black-900_66 flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
          <div className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-10 gap-[99px] items-start justify-start p-[43px] md:px-5 rounded-br-[32px] rounded-tr-[32px] shadow-bs2 w-[79%] md:w-full">
            <Sidebar1 className="!sticky !w-[278px] bg-white-A700 flex h-screen md:hidden justify-start md:ml-[0] ml-[13px] md:mt-0 mt-[33px] overflow-auto rounded-lg shadow-bs2 top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-[39px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-xl"
                  size="txtRobotoBold20Gray90001"
                >
                  <span className="md:text-[22px] sm:text-xl text-gray-900_01 font-roboto text-left text-2xl font-bold">
                    Thank you so much for taking the time!{" "}
                  </span>
                  <span className="text-gray-900_01 font-roboto text-left font-bold">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_01 font-roboto text-left text-base font-normal">
                    Please provie the below details!
                  </span>
                </Text>
                <Text
                  className="ml-2.5 md:ml-[0] mt-11 text-base text-gray-900_01"
                  size="txtRobotoRegular16Gray90001"
                >
                  First Name:
                </Text>
                <Input
                  name="groupFortySeven"
                  placeholder="John"
                  className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                  wrapClassName="mt-2 w-[59%]"
                ></Input>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[19px] text-base text-gray-900_01"
                  size="txtRobotoRegular16Gray90001"
                >
                  Last Name:
                </Text>
                <Input
                  name="groupFortySix"
                  placeholder="Doe"
                  className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                  wrapClassName="mt-2 w-[59%]"
                ></Input>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[19px] text-base text-gray-900_01"
                  size="txtRobotoRegular16Gray90001"
                >
                  Address:
                </Text>
                <TextArea
                  className="bg-white-A700 border-0 leading-[normal] mt-2 pb-[35px] pl-6 pr-[35px] pt-[15px] sm:px-5 rounded-lg shadow-bs2 text-base placeholder:text-gray-400_03 text-gray-400_03 text-left w-full"
                  name="groupFortyFive"
                  placeholder="Enter your full Postal Address"
                ></TextArea>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[11px] text-base text-gray-900_01"
                  size="txtRobotoRegular16Gray90001"
                >
                  Country:
                </Text>
                <Input
                  name="groupFortyFour"
                  placeholder="India"
                  value={groupfortyfourvalue}
                  onChange={(e) => setGroupfortyfourvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                  wrapClassName="flex mt-1.5 w-[69%]"
                  suffix={
                    groupfortyfourvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-6 ml-[35px] my-auto"
                        onClick={() => setGroupfortyfourvalue("")}
                        fillColor="#c1c1c1"
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                      />
                    ) : (
                      <Img
                        className="cursor-pointer h-6 ml-[35px] my-auto"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    )
                  }
                  size="xs"
                ></Input>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[19px] text-base text-gray-900_01"
                  size="txtRobotoRegular16Gray90001"
                >
                  Email ID:
                </Text>
                <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-start mt-2 w-[93%] md:w-full">
                  <Input
                    name="email"
                    placeholder="example@sample.com"
                    className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                    wrapClassName="w-[64%] sm:w-full"
                    type="email"
                  ></Input>
                  <Text
                    className="text-base text-red-600"
                    size="txtRobotoRegular16Red600"
                  >
                    Please enter a valid e-mail
                  </Text>
                </div>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[19px] text-base text-gray-900_01"
                  size="txtRobotoRegular16Gray90001"
                >
                  Phone Number:
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-2 w-[95%] md:w-full">
                  <Button
                    className="!text-gray-400_03 cursor-pointer leading-[normal] min-w-[84px] rounded-lg text-base text-center"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    +91
                  </Button>
                  <Input
                    name="groupFortyTwo"
                    placeholder="123456789"
                    className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                    wrapClassName="sm:ml-[0] ml-[9px] w-[46%] sm:w-full"
                    type="number"
                  ></Input>
                  <Text
                    className="sm:ml-[0] ml-[17px] text-base text-red-600"
                    size="txtRobotoRegular16Red600"
                  >
                    Please enter a valid number
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[231px] mt-[33px] rounded-lg text-center text-xl"
                  color="teal_300"
                  size="xs"
                  variant="fill"
                >
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListLayoutFormPage;
