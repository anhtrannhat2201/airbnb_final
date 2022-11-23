import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import OptionInHeader from "./OptionInHeader";
import SearchHeader from "./SearchHeader";
export default function HeaderFooter() {
  return (
    <header>
      <div className="flex header_content">
        <div className="flex ml-10">
          <a
            aria-label="Trang chủ Airbnb"
            data-testid="help-center-header-airbnb-logo"
            href="/?logo=1"
            className="_11eqlma4"
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: "block",
                height: 32,
                width: 32,
                fill: "var(--f-k-smk-x)",
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="mt-2"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z" />
            </svg>
          </a>
          <a
            data-testid="help-center-header-hc-logo"
            href="/help"
            className="mt76m69 ml-2 mt-2 "
          >
            Trung tâm trợ giúp
            {/* <span className="a8jt5op dir dir-ltr"></span> */}
          </a>
        </div>

        {/* <form className="ml-60">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only dark:text-gray-300"
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
        </form> */}
        <div>
          <SearchHeader />
        </div>
        <div className="ml-60">
          <FontAwesomeIcon
            icon={faGlobe}
            style={{ fontSize: "22px" }}
            className="mt-4"
          />
        </div>
        {/* <div className="m15bpvrt dir dir-ltr flex mt-2 ml-4">
          <div className="h189cyzx dir dir-ltr">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: "block",
                fill: "none",
                height: 16,
                width: 16,
                stroke: "currentColor",
                strokeWidth: 4,
                overflow: "visible",
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none" fillRule="nonzero">
                <path d="m2 16h28" />
                <path d="m2 24h28" />
                <path d="m2 8h28" />
              </g>
            </svg>
          </div>
          <div
            className="a18h9n31 dir dir-ltr"
            data-testid="help-center-header-nav-menu-avatar"
          >
            <div className="a74dnhc dir dir-ltr">
              <div className="dryvxum dir dir-ltr">
                <svg
                  className=" ml-2"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "block",
                    height: 30,
                    width: 30,
                    fill: "currentColor",
                  }}
                  aria-label="Menu điều hướng chính"
                  role="img"
                  focusable="false"
                >
                  <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                </svg>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <OptionInHeader />
        </div>
      </div>
    </header>
  );
}
