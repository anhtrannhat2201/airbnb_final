import { Box, Stack } from "@mui/material";
import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BecomeAHost.css";
import Carousel from "./Carousel";
// import Map from './Map';
import Pricing from "./Pricing";

export default function BecomeAHost() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY < 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div>
      <header className={`active1 content ${show && "hidden"}`}>
        <Box>
          <Link to="/">
            <img
              className="header__icon text-white ml-5"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt=""
            />
          </Link>
        </Box>
        <Link to="/">
          <button className="gradients mr-5">Thử Đón Tiếp Khách</button>
        </Link>
      </header>
      <div
        className="bg-black"
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "450px",
          height: "calc(100vh - 132px)",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: "50%" }}>
          <Box>
            <Link to="/">
              <img
                className="header__icon text-white ml-5 mt-5"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt=""
              />
            </Link>
          </Box>
          <div className="text-center">
            <h1>
              <div
                style={{
                  fontSize: 64,
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: "30px",
                }}
                role="text"
              >
                Mở ra cánh cửa <br />
                đón tiếp khách
              </div>
            </h1>
            <Link to="/">
              <button className="mt-5 gradients">Thử Đón Tiếp Khách</button>
            </Link>
          </div>
        </div>
        <div className="_170yk6jn">
          <div className="_1tllc1q" style={{ flex: "50%" }}>
            <video
              className="_e2l2kr"
              autoPlay
              aria-label="Chelsea, Chủ nhà ở Philadelphia, mỉm cười khi mở cửa. Soraya, Chủ nhà ở Mumbai, mỉm cười khi mở cửa trước cùng một người khác ở bên cạnh. Mohamed, Chủ nhà ở Johannesburg, mỉm cười khi mở cửa. Maria, Chủ nhà ở Mexico City, gật đầu mỉm cười khi mang cây đi."
              crossOrigin="anonymous"
              playsInline
              preload="auto"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            >
              <source
                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265"
                type="video/mp4; codecs=hevc"
              />
              <source
                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                type="video/mp4"
              />
            </video>
            <div className="_11wt8cb" />
            <div className="_x86o7u">
              <div className="_1imtc0d">
                <div
                  className="_1h6n1zu"
                  role="presentation"
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    verticalAlign: "bottom",
                    height: 40,
                    width: "auto",
                    minHeight: 1,
                  }}
                >
                  <img
                    className="_9ofhsl"
                    aria-hidden="true"
                    alt="Chủ nhà ở Philadelphia"
                    elementtiming="LCP-target"
                    src="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480"
                    data-original-uri="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480"
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                      verticalAlign: "bottom",
                    }}
                  />
                  <div
                    className="_15p4g025"
                    style={{
                      backgroundImage:
                        'url("https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480")',
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="_12odjcj">Chủ nhà ở Philadelphia</div>
            </div>
            <div className="_tgyx5c" />
            <div className="_o6pniv">
              <button aria-label="Phát" type="button" className="_1osbyo4">
                <span className=" dir dir-ltr">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 16,
                      width: 16,
                      fill: "white",
                    }}
                  >
                    <path d="m4.504 1.0074c-.2305-.134-.5-.171-.7585-.103-.2136.05621-.4026.18157-.5375.35651-.1348.17494-.208.3896-.208.61049v12.2595c.0003.1758.0468.3485.135.5006s.2149.2783.3674.3659c.1524.0876.3253.1335.5011.1331052.1759-.0005052.3485-.0472052.5005-.1356052l10.5075-6.13c.1505-.0884.2753-.2145.362-.3659.0867-.1515.1324002-.3229.1324002-.4975 0-.1745-.0455002-.346-.1321002-.4975-.0866-.1514-.2114-.2777-.3618-.3661z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Pricing />
      </div>
      <div style={{ margin: "150px 50px" }}>
        <Carousel />
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#FF385C",
            margin: "96px 48px",
            borderRadius: "10px",
            height: 500,
            width: "93%",
          }}
        >
          <div
            className="text-center text-4xl font-bold lg:text-5xl text-white"
            style={{ paddingTop: "155px" }}
          >
            Giúp đỡ chỗ ở cho 100.000 người tị nạn đang
            <br />
            chạy trốn khỏi Ukraine
          </div>
          <button className="button hover:bg-gray-600">
            <a
              className="text-white text-sm"
              href="https://vi.airbnb.org/help-ukraine?_ga=2.44083812.1163796900.1666590845-867797294.1666072157&_set_bev_on_new_domain=1666336734_MGI5OWIzNTMzNWVj"
            >
              Tìm hiểu Thêm
            </a>
          </button>
        </div>
      </div>
      <div>
        <div style={{ paddingBottom: 300 }}>
          <img
            style={{
              borderRadius: "10px",
              position: "absolute",
              width: "93%",
              margin: "0px 48px",
            }}
            src="../../ImgCarousel/anh7.webp"
            alt=""
          />
          <div
            className="text-center ml-5 text-4xl font-bold lg:text-5xl text-white"
            style={{ paddingTop: "370px", position: "relative" }}
          >
            Bạn có thắc mắc về việc đón tiếp khách?
            <br />
            Hãy hỏi ý kiến Chủ nhà siêu cấp.
          </div>
          <button className="button hover:bg-gray-600 ml-5">
            <a
              className="text-white text-sm"
              href="https://vi.airbnb.org/help-ukraine?_ga=2.44083812.1163796900.1666590845-867797294.1666072157&_set_bev_on_new_domain=1666336734_MGI5OWIzNTMzNWVj"
            >
              Tìm hiểu Thêm
            </a>
          </button>
        </div>
      </div>
      <div>
        <div
          className="bg-black"
          style={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "450px",
            height: "calc(100vh - 40px)",
            flexDirection: "row",
          }}
        >
          <div className="_1tllc1q">
            <video
              className="_e2l2kr"
              autoPlay
              aria-label="Ba Chủ nhà khác nhau chuẩn bị chỗ ở để đón khách đến. Chủ nhà đầu tiên, một phụ nữ, dọn bánh mì mới nướng ra. Chủ nhà thứ hai, một người đàn ông, viết lời nhắn chào mừng dành cho khách. Chủ nhà thứ ba, một phụ nữ, đặt một bát chanh lên bàn."
              crossOrigin="anonymous"
              playsInline
              preload="none"
              style={{ objectFit: "cover" }}
            >
              <source
                src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265"
                type="video/mp4; codecs=hevc"
              />
              <source
                src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
                type="video/mp4"
              />
            </video>
            <div className="_tgyx5c" />
            <div className="_7rkbxz">
              <button
                aria-label="Nút: Tạm dừng video giới thiệu của Chủ nhà"
                type="button"
                className="_1osbyo4"
              >
                <span className=" dir dir-ltr">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 16,
                      width: 16,
                      fill: "white",
                    }}
                  >
                    <path d="M13 1v14H9V1zM7 1v14H3V1z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div style={{ flex: "100%", marginTop: 180 }}>
            <div className="text-center">
              <h1>
                <div
                  style={{
                    fontSize: 50,
                    color: "#fff",
                    fontWeight: "600",
                    marginTop: "25px",
                  }}
                  role="text"
                >
                  Thử đón tiếp khách trên
                  <br />
                  Airbnb
                </div>
              </h1>
              <h3>
                <div
                  style={{
                    fontSize: 19,
                    color: "#fff",
                    fontWeight: "200",
                    marginTop: "25px",
                  }}
                  role="text"
                >
                  Hãy tham gia cùng chúng tôi. Chúng tôi sẽ hỗ trợ bạn hoàn
                  thành
                  <br />
                  từng bước của quy trình.
                </div>
              </h3>
              <Link to="/">
                <button className="mt-5 gradients">Bắt Đầu Thôi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
