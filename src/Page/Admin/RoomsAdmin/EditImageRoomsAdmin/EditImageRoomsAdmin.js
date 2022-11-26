import { Button, Form, Modal, notification, Spin, Upload } from "antd";
import { EditOutlined } from "@ant-design/icons";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { https } from "../../../../Services/configURL";
import { getListRoomAction } from "../../../../redux/actions/actionRoom";

export default function EditImageRoomsAdmin({ id, hinhAnh }) {
  const [fileList, setFileList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const nameCover = "Default Image";
  useEffect(() => {
    setFileList(
      hinhAnh
        ? [
            {
              uid: -1,
              name: nameCover,
              url: hinhAnh,
            },
          ]
        : []
    );
  }, []);
  const uploadImage = async (options) => {
    const { file } = options;

    let formData = new FormData();

    formData.append("formFile", file);
    try {
      const openNotificationWithIconSuccess = (type = "success") => {
        notification[type]({
          message: "Success",
          description: "Update Image Success",
        });
      };
      const result = await https.post(
        `/api/phong-thue/upload-hinh-phong?maPhong=${id}`,
        formData
      );
      if (result.data.statusCode === 200) {
        setFileList([
          {
            uid: result.data.content.id,
            name: nameCover,
            url: result.data.content.hinhAnh,
          },
        ]);
      }
      openNotificationWithIconSuccess("success");
      dispatch(getListRoomAction());
    } catch (err) {
      const openNotificationWithIconError = (type = "error") => {
        notification[type]({
          message: "Error",
          description: err.response.data.content,
        });
      };
      openNotificationWithIconError("error");
    }
  };

  return (
    <Fragment>
      <EditOutlined
        className="text-2xl hover:text-blue-400"
        size={100}
        onClick={showModal}
      />
      <Modal
        title="Upload Image"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Upload
          accept="image/*"
          customRequest={uploadImage}
          listType="picture-card"
          fileList={fileList}
          showUploadList={{ showRemoveIcon: true }}
          iconRender={() => {
            return <Spin></Spin>;
          }}
          progress={{
            strokeWidth: 3,
            strokeColor: {
              "0%": "#f0f",
              "100%": "#f00",
            },
            style: { top: 12 },
          }}
        >
          <Button>Upload</Button>
        </Upload>
      </Modal>
    </Fragment>
  );
}
