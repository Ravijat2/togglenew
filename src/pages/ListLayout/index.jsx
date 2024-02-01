import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const ListLayoutPage = () => {
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
    fetchCardData()
  }, [])
  

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-roboto items-center justify-start mx-auto shadow-bs2 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mx-auto md:px-5 w-full">
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
                className="common-pointer bg-blue_gray-50 flex flex-row gap-[27px] items-center justify-center sm:pl-5 pl-[35px] rounded-lg shadow-bs1 w-[88%] md:w-full"
                onClick={() => navigate("/cardlayout")}
              >
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
            <div className="bg-white-A700 flex flex-col gap-[21px] items-center justify-start mb-[382px] mt-[29px] mx-auto p-[17px] rounded-lg shadow-bs2 w-[72%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtRobotoBold28"
              >
                Have a Feedback?
              </Text>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[229px] rounded-lg text-center text-xl"
                onClick={() => navigate("/listlayoutform")}
                color="teal_A100"
                size="sm"
                variant="fill"
              >
                We’re Listening!
              </Button>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[46px] items-center justify-start md:ml-[0] ml-[77px] md:mt-0 mt-[76px] w-full">
            <List
              className="flex flex-col gap-[17px] items-center w-full"
              orientation="vertical"
            >/
              {cardData.length > 0 && (
                <div>
                  {cardData.map(data => (
                    <div className="pb-[10px] flex flex-1 flex-col items-center justify-start my-0 w-full">
                    <div
                      className="common-pointer bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[16px] shadow-bs2 w-full"
                      onClick={() => navigate("/listpopout")}
                    >
                      <div key={data.id} className="flex md:flex-col flex-row gap-[23px] items-start justify-start md:ml-[0] ml-[11px] mt-[13px] w-[88%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtRobotoBold20"
                          >{data.title}
                          </Text>
                          <Text
                            className="mt-[3px] text-gray-900 text-xl"
                            size="txtRobotoRegular20"
                          >{data.body}
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
                  ))}
                </div>
              )}
            </List>
            <div className="flex flex-row items-start justify-center w-1/5 md:w-full">
              <Text
                className="bg-white-A700 p-[15px] flex h-[42px] items-center justify-center rounded-[50%] text-center text-gray-600 text-shadow-ts text-xl w-[42px]"
                size="txtRobotoBold20Gray600"
              >
                1
              </Text>
              <Text
                className="bg-gray-400_01 p-[15px] flex h-8 items-center justify-center ml-[22px] my-[5px] rounded-[50%] text-center text-white-A700 text-xl w-8"
                size="txtRobotoBold20WhiteA700"
              >
                2
              </Text>
              <Text
                className="bg-gray-400_01 p-[15px] flex h-8 items-center justify-center ml-[17px] my-[5px] rounded-[50%] text-center text-white-A700 text-xl w-8"
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
          <div className="flex flex-1 flex-col md:gap-10 gap-[248px] items-center justify-start md:ml-[0] ml-[13px] md:mt-0 mt-[222px] w-full">
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
      </div>
    </>
  );
};

export default ListLayoutPage;
