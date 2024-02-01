import React, { useEffect, useState } from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const CardLayoutPage = () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState([]);
  const fetchCardData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCardData(data)
      })
  }

  useEffect(() => {
    fetchCardData();
  },[])

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-roboto items-start justify-start mx-auto shadow-bs2 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-start justify-start md:px-5 w-[95%] md:w-full">
          <Sidebar className="!sticky !w-[391px] bg-blue_gray-50 flex h-screen md:hidden justify-start overflow-auto rounded-br-[32px] rounded-tr-[32px] shadow-bs2 top-[0]">
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
                  <Text className="mr-[120px] text-base">
                    Here’s your News!
                  </Text>
                </div>
              </MenuItem>
            </Menu>
            <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start mt-[43px] mx-auto p-4 rounded-lg shadow-bs2 w-[72%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtRobotoBold28"
              >
                View Toggle
              </Text>
              <div
                className="common-pointer bg-blue_gray-50 flex flex-row gap-[30px] items-center justify-start pr-10 sm:pr-5 rounded-lg shadow-bs1 w-[88%] md:w-full"
                onClick={() => navigate("/listlayout")}
              >
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
            <div className="bg-white-A700 flex flex-col gap-[21px] items-center justify-start mb-[382px] mt-[29px] mx-auto p-[17px] rounded-lg shadow-bs2 w-[72%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtRobotoBold28"
              >
                Have a Feedback?
              </Text>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[229px] rounded-lg text-center text-xl"
                onClick={() => navigate("/cardlayoutform")}
                color="teal_A100"
                size="sm"
                variant="fill"
              >
                We’re Listening!
              </Button>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col md:gap-10 gap-[67px] items-center justify-start w-full pt-[50px]">
            {cardData.length > 0 && (
            <div className="md:gap-5 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {cardData.map(data => (
                <div key={data.id}
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
                <Img
                  className="h-[18px] ml-[auto] w-[18px]"
                  src="images/img_close.svg"
                  alt="close"
                />
                <div className="flex flex-col items-start justify-start mb-[11px] mt-[3px] mx-auto w-[90%] md:w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20Black900"
                  >
                    {data.title}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16Black900"
                  >
                    {data.body}
                  </Text>
                  <Text
                    className="text-base text-gray-400"
                    size="txtRobotoBold16"
                  >
                    Mon, 21 Dec 2020 14:57 GMT
                  </Text>
                </div>
              </div>
              ))}
              {/* <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
                <Img
                  className="h-[18px] md:ml-[0] ml-[auto] w-[18px]"
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
              <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
                <Img
                  className="h-[18px] md:ml-[0] ml-[auto] w-[18px]"
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
              <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
                <Img
                  className="h-[18px] md:ml-[0] ml-[u] w-[18px]"
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
              <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
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
              <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
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
              <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col justify-start p-3 rounded-lg shadow-bs2 w-full"
                onClick={() => navigate("/cardpopout")}
              >
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
              </div> */}
            </div>
            )}
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
        </div>
      </div>
    </>
  );
};

export default CardLayoutPage;
