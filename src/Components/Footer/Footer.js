import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="p-6 dark:bg-gray-800 dark:text-gray-100 bg-gray-200 mt-20">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4  ml-20">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-black" style={{ fontWeight: "600" }}>
            Hỗ trợ
          </h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Trung tâm trợ giúp
            </a>
            <a rel="noopener noreferrer" href="#">
              AirCover
            </a>
            <a rel="noopener noreferrer" href="#">
              Thông tin an toàn
            </a>
            <a rel="noopener noreferrer" href="#">
              Hỗ trợ người khuyết tật{" "}
            </a>
            <a rel="noopener noreferrer" href="#">
              Các tùy chọn hủy
            </a>
            <a rel="noopener noreferrer" href="#">
              Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
            </a>
            <a rel="noopener noreferrer" href="#">
              Báo cáo lo ngại của hàng xóm
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium  text-black" style={{ fontWeight: "600" }}>
            Cộng đồng
          </h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Airbnb.org: nhà ở cứu trợ
            </a>
            <a rel="noopener noreferrer" href="#">
              Hỗ trợ dân tị nạn Afghanistan
            </a>
            <a rel="noopener noreferrer" href="#">
              Chống phân biệt đối xử
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium  text-black" style={{ fontWeight: "600" }}>
            Đón tiếp khách
          </h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400 ">
            <a rel="noopener noreferrer" href="#">
              Thử đón tiếp khách
            </a>
            <a rel="noopener noreferrer" href="#">
              AirCover cho Chủ nhà
            </a>
            <a rel="noopener noreferrer" href="#">
              Xem tài nguyên đón tiếp khách
            </a>
            <a rel="noopener noreferrer" href="#">
              Truy cập diễn đàn cộng đồng
            </a>
            <a rel="noopener noreferrer" href="#">
              Đón tiếp khách có trách nhiệm
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium  text-black" style={{ fontWeight: "600" }}>
            Airbnb
          </h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Trang tin tức
            </a>
            <a rel="noopener noreferrer" href="#">
              Tìm hiểu các tính năng mới
            </a>
            <a rel="noopener noreferrer" href="#">
              Thư ngỏ từ các nhà sáng lập
            </a>
            <a rel="noopener noreferrer" href="#">
              Cơ hội nghề nghiệp
            </a>
            <a rel="noopener noreferrer" href="#">
              Nhà đầu tư
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex items-center  px-0 pt-12 text-sm ml-20"
        style={{ borderTop: "1px solid #cac5c5" }}
      >
        <hr />
        <h4 className="dark:text-gray-400 mr-2">© 2022 Airbnb, Inc. </h4>

        <NavLink className="mr-2" to="/privacy">
          <span className="footer_dot">.</span>
          <span>Quyền riêng tư</span>
        </NavLink>

        <NavLink className="mr-2" to="/rules">
          {" "}
          <span className="footer_dot">.</span>
          <span>Điều khoản</span>
        </NavLink>

        <NavLink to="/sitemap">
          {" "}
          <span className="footer_dot">.</span>
          <span>Sơ đồ trang web</span>
        </NavLink>
        <div className="ml-80">
          <div>
            <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "16px" }} />
            <span className="ml-2">Tiếng Việt (VN)</span>
            <span className="ml-5">$ (USD)</span>
            <span className="ml-10">
              {" "}
              <a href="https://www.facebook.com/airbnb" target="_blank">
                <i
                  className="fa-brands fa-facebook-f ml-5"
                  style={{ fontSize: 20 }}
                />
              </a>
              <a href="https://twitter.com/airbnb" target="_blank">
                <i
                  className="fa-brands fa-twitter ml-5"
                  style={{ fontSize: 20 }}
                />
              </a>
              <a href="https://www.instagram.com/airbnb/" target="_blank">
                <i
                  className="fa-brands fa-instagram ml-5"
                  style={{ fontSize: 20 }}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
