import { Col, message as Message, Spin } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button } from "antd";
import { Typography } from "antd";
import CreateModal from "../common/components/CreateModal";
import ModuleList from "./ModuleList";
import { CreateModule } from "../requests/module.request";
import useAxiosGet from "../common/components/customHooks/useAxiosGet";

const { Paragraph } = Typography;

const ModuleLeftSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, modules, setData] = useAxiosGet(
    "http://localhost:4000/getModules"
  );

  const handleOk = async (payload: { name: string }) => {
    try {
      setConfirmLoading(true);
      const { data } = await CreateModule(payload);
      setData([...modules, data]);
      Message.success("Module saved");
      handleCancel();
    } catch ({ message }) {
      Message.error(message);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Col span={6} className="h-[100vh] bg-[#ebebeb]">
        <div className="p-[20px]">
          <div className="flex justify-between">
            <Paragraph>Modules</Paragraph>
            <Button
              onClick={() => setIsModalOpen(true)}
              icon={<PlusCircleOutlined />}
            />
          </div>
          <div>
            {loading && (
              <div className="flex items-center justify-center">
                <Spin />
              </div>
            )}
            {modules?.length > 0 && <ModuleList list={modules} />}
          </div>
        </div>
      </Col>

      <CreateModal
        isModalOpen={isModalOpen}
        title="Create module"
        handleCancel={handleCancel}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
      />
    </>
  );
};

export default ModuleLeftSidebar;
