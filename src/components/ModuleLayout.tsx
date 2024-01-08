import { Col, Layout, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button } from "antd";
import { Typography } from "antd";
import CreateModal from "../common/components/CreateModal";
import ModuleLeftSidebar from "./ModuleLeftSidebar";

const { Paragraph } = Typography;

const ModuleLayout = () => {
  return (
    <Row gutter={16}>
      <ModuleLeftSidebar />
      <Col span={6}>sdfds</Col>
    </Row>
  );
};

export default ModuleLayout;
