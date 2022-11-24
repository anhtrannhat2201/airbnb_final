import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <form className="ml-60">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                style={{
                  border: "1px solid ",
                  borderRadius: "100px",
                  width: "300px",
                }}
                className="block p-4 pl-10 w-full text-sm text-gray-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm thông tin hướng dẫn"
                required
              />
              <button
                type="submit"
                className=" text-white absolute right-2 bottom-2 bg-pink-600 hover:bg-pink-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  borderRadius: "50%",
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-62 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <h3
            className="ml-4 mt-2"
            style={{ borderBottom: "1px solid #cac5c5" }}
          >
            Bài viết hàng đầu
          </h3>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  style={{ fontSize: "18px" }}
                  href="https://www.airbnb.com.vn/help/article/2701"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faBookJournalWhills}
                    style={{ fontSize: "18px" }}
                    className="mr-2"
                  />
                  Chính sách trường hợp bất khả kháng và đại dịch virus Corona
                  (COVID-19)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  style={{ fontSize: "18px" }}
                  href="https://www.airbnb.com.vn/help/article/1320"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faBookJournalWhills}
                    style={{ fontSize: "18px" }}
                    className="mr-2"
                  />
                  Chính sách trường hợp bất khả kháng
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  style={{ fontSize: "18px" }}
                  href="https://www.airbnb.com.vn/help/article/76"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faBookJournalWhills}
                    style={{ fontSize: "18px" }}
                    className="mr-2"
                  />
                  Thay đổi hoặc đặt lại mật khẩu của bạn
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
