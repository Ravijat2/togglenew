import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text, TextArea } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const CardLayoutFormPage = () => {
  const [groupfourvalue, setGroupfourvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 font-roboto h-[900px] mx-auto relative shadow-bs2 w-full">
        <div className="flex flex-col md:gap-10 gap-[67px] h-full items-center justify-start ml-auto mr-[77px] my-auto md:px-5 w-[63%]">
          <div className="md:gap-5 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[228px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
              <div className="flex flex-col items-start justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Sed volutpat vitae id eleifend. Commodo...
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16Black900"
                >
                  Interdum pretium porttitor nibh cursus...
                </Text>
                <Text
                  className="text-base text-gray-400"
                  size="txtRobotoBold16"
                >
                  Mon, 21 Dec 2020 14:57 GMT
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-2.5 object-cover rounded-tl rounded-tr w-full"
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
              <div className="flex flex-col items-start justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Risus natoque porta eget vestibulum...
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16Black900"
                >
                  Nec facilisis duis venenatis nulla porta...
                </Text>
                <Text
                  className="text-base text-gray-400"
                  size="txtRobotoBold16"
                >
                  Mon, 21 Dec 2020 14:57 GMT
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-2.5 object-cover rounded-tl rounded-tr w-full"
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
              <div className="flex flex-col items-start justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20Black900"
                >
                  Magnis quisque non ullamcorper mus...
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16Black900"
                >
                  Amet vitae rhoncus nisi tellus eget ut vulputate...
                </Text>
                <Text
                  className="text-base text-gray-400"
                  size="txtRobotoBold16"
                >
                  Mon, 21 Dec 2020 14:57 GMT
                </Text>
                <Img
                  className="h-[122px] md:h-auto mt-2.5 object-cover rounded-tl rounded-tr w-full"
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
                <div className="md:h-[54px] h-[69px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-full"
                    size="txtRobotoRegular16Black900"
                  >
                    Nullam tempus nisl laoreet arcu sit eget...
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] text-base text-gray-400"
                    size="txtRobotoBold16"
                  >
                    Mon, 21 Dec 2020 14:57 GMT
                  </Text>
                </div>
                <Img
                  className="h-[122px] md:h-auto mt-[11px] object-cover rounded w-full"
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
                <div className="md:h-[54px] h-[69px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-full"
                    size="txtRobotoRegular16Black900"
                  >
                    Nulla gravida id quam rutrum. Aenean tempus..
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] text-base text-gray-400"
                    size="txtRobotoBold16"
                  >
                    Mon, 21 Dec 2020 14:57 GMT
                  </Text>
                </div>
                <Img
                  className="h-[122px] md:h-auto mt-[11px] object-cover rounded w-full"
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
                <div className="md:h-[54px] h-[69px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-full"
                    size="txtRobotoRegular16Black900"
                  >
                    At vulputate ultricies sed euismod nulla. Sed..
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] text-base text-gray-400"
                    size="txtRobotoBold16"
                  >
                    Mon, 21 Dec 2020 14:57 GMT
                  </Text>
                </div>
                <Img
                  className="h-[122px] md:h-auto mt-[11px] object-cover rounded w-full"
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
        <div className="absolute bg-black-900_66 flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
          <div className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-10 gap-[99px] items-start justify-start p-[43px] md:px-5 rounded-br-[32px] rounded-tr-[32px] shadow-bs2 w-[79%] md:w-full">
            <Sidebar1 className="!sticky !w-[278px] bg-white-A700 flex h-screen md:hidden justify-start md:ml-[0] ml-[13px] md:mt-0 mt-[33px] overflow-auto rounded-lg shadow-bs2 top-[0]" />
            <div className="flex flex-1 md:h-[768px] h-[774px] justify-end md:mt-0 mt-[39px] relative w-full">
              <div className="flex flex-col md:gap-10 gap-[71px] h-full items-start justify-start mb-[91px] ml-auto mr-[35px] mt-auto">
                <Text
                  className="text-base text-red-600"
                  size="txtRobotoRegular16Red600"
                >
                  Please enter a valid e-mail
                </Text>
                <Text
                  className="text-base text-red-600"
                  size="txtRobotoRegular16Red600"
                >
                  Please enter a valid number
                </Text>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
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
                    name="groupSix"
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
                    name="groupSeven"
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
                    className="bg-white-A700 border-0 leading-[normal] mt-2 pb-[35px] pl-[21px] pr-[35px] pt-4 sm:px-5 rounded-lg shadow-bs2 text-base placeholder:text-gray-400_03 text-gray-400_03 text-left w-full"
                    name="groupFive"
                    placeholder="Enter your full Postal Address"
                  ></TextArea>
                  <Text
                    className="ml-2.5 md:ml-[0] mt-[11px] text-base text-gray-900_01"
                    size="txtRobotoRegular16Gray90001"
                  >
                    Country:
                  </Text>
                  <Input
                    name="groupFour"
                    placeholder="India"
                    value={groupfourvalue}
                    onChange={(e) => setGroupfourvalue(e)}
                    className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                    wrapClassName="flex mt-1.5 w-[69%]"
                    suffix={
                      groupfourvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer h-6 ml-[35px] my-auto"
                          onClick={() => setGroupfourvalue("")}
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
                  <Input
                    name="email"
                    placeholder="example@sample.com"
                    className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                    wrapClassName="mt-2 w-[59%]"
                    type="email"
                    size="md"
                  ></Input>
                  <Text
                    className="ml-2.5 md:ml-[0] mt-[19px] text-base text-gray-900_01"
                    size="txtRobotoRegular16Gray90001"
                  >
                    Phone Number:
                  </Text>
                  <div className="flex flex-row gap-[9px] items-center justify-start mt-2 w-[59%] md:w-full">
                    <Button
                      className="!text-gray-400_03 cursor-pointer leading-[normal] min-w-[84px] rounded-lg text-base text-center"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      +91
                    </Button>
                    <Input
                      name="groupNine"
                      placeholder="123456789"
                      className="leading-[normal] p-0 placeholder:text-gray-400_03 text-base text-left w-full"
                      wrapClassName="w-[74%]"
                      type="number"
                      size="md"
                    ></Input>
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
      </div>
    </>
  );
};

export default CardLayoutFormPage;
