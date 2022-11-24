import { Box, Button, Stack } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { USER } from "../../Services/localServices";
export default function ProfileSetting() {
  if (localStorage.getItem(USER)) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/adminuser">
          <h1 className="text-black mt-3 mr-3 font-medium hover:rounded-3xl hover:bg-gray-100">
            Quản Lí
          </h1>
        </Link>

        <Link to="/becomeahost">
          <h1 className="text-black mt-3 font-medium hover:rounded-3xl hover:bg-gray-100">
            Đón Tiếp Khách
          </h1>
        </Link>

        <Button>
          <LanguageIcon className="text-lg w-40 text-black rounded-full cursor-pointer" />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack>
            <AccountMenu />
          </Stack>
        </Button>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/becomeahost">
          <h1 className="text-black mt-3 font-medium hover:rounded-3xl hover:bg-gray-100">
            Trở Thành Chủ Nhà
          </h1>
        </Link>

        <Button>
          <LanguageIcon className="text-lg w-40 text-black rounded-full cursor-pointer" />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack>
            <AccountMenu />
          </Stack>
        </Button>
      </Box>
    );
  }
}
