import { Form } from "antd";
import { useFormik } from "formik";

import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPhongReviewAction,
  postReviewAction,
} from "../../redux/actions/actionReview";

function Review() {
  const { roomDetail } = useSelector((state) => state.roomReducer);
  const { userInfor } = useSelector((state) => state.reducerUser);

  const { listReview } = useSelector((state) => state.reviewReducer);

  const { id } = useParams();

  const createRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const today = new Date();
  let getToday = moment(today).format("DD-MM-YYYY");

  // console.log(roomDetail?._id);
  // console.log(listReview);
  // const onChange = (value) => {
  //   console.log("value", value);
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhongReviewAction(id));
  }, []);

  const formik = useFormik({
    initialValues: {
      maPhong: id,
      maNguoiBinhLuan: userInfor?.user.id,
      ngayBinhLuan: getToday,
      saoBinhluan: 5,
    },
    onSubmit: (values) => {
      // tạo đối tượng form data => đưa giá trị values từ formik vào form data
      let formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      if (values === "") {
        <p>Bình luận không được để trống</p>;
      } else {
      }
      dispatch(postReviewAction(values));
    },
  });

  return (
    <div className="mt-10 pb-5 border-b">
      {/* header */}
      <div>
        <h2 className="font-semibold text-gray-800 text-xl pb-4 flex items-center">
          <div className="flex items-center">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "inline-block",
                height: 16,
                width: 16,
                fill: "currentcolor",
              }}
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-2">
            {roomDetail?.danhGia ? createRandomNumber(1, 5) : ""}
          </div>
          <div className="ml-2">{createRandomNumber(10, 100)} đánh giá</div>
        </h2>
      </div>

      {/* đánh giá */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Mức độ sạch sẽ
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-800 h-1 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Độ chính xác
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-800 h-1 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Giao tiếp
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-800 h-1 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Vị trí
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-800 h-1 rounded-full"
                style={{ width: "95%" }}
              />
            </div>
            <div className="ml-4">4,9</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Nhận phòng
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-800 h-1 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Giá trị
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-800 h-1 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
      </div>

      {/* review */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-4 sm:w-4/5 mt-5 ">
        {listReview?.map((review, index) => {
          if (index < 8) {
            return (
              <div key={index} className="mb-5 ">
                <div className="flex items-center">
                  <div>
                    {review?.avatar ? (
                      <img
                        src={review?.avatar}
                        className="w-10 h-10 rounded-full overflow-hidden shadow-lg"
                      />
                    ) : (
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "40px",
                          width: "40px",
                          fill: "currentcolor",
                        }}
                        className="text-gray-500"
                      >
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-base tracking-wide text-gray-900">
                      {review.tenNguoiBinhLuan
                        ? review.tenNguoiBinhLuan
                        : "Noname"}
                    </h4>
                    <span className="font-normal text-sm text-gray-500">
                      {review.ngayBinhLuan}
                    </span>
                  </div>
                </div>
                <div className="text-gray-800 tracking-wider">
                  <p>{review.noiDung}</p>
                </div>
              </div>
            );
          }
        })}
        <div className="sm:col-span-2 mb-4 ">
          <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider">
            Hiển thị tất cả 120 đánh giá
          </button>
        </div>
      </div>
      <div className="w-full border"></div>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="horizontal"
      >
        <p className="text-xl">
          <span>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "inline-block",
                height: 16,
                width: 16,
                fill: "currentcolor",
              }}
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fillRule="evenodd"
              />
            </svg>
          </span>{" "}
          Bình luận
        </p>
        <Form.Item
          name="review"
          rules={[
            {
              required: true,
              message: (
                <span className="text-red-400">
                  Please input your Password!
                </span>
              ),
            },
          ]}
        >
          <input
            className="w-60 h-20 border rounded border-black"
            id="noiDung"
            type="review"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <div className="mt-5 mb-10">
          <button
            type="submit"
            className="px-2 py-3 bg-blue-500 text-white  hover:bg-blue-400 transition-all duration-200 rounded-md"
          >
            Bình luận
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Review;
