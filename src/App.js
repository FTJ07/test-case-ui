import { Col, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Typography } from 'antd';

const { Paragraph } = Typography;

function App() {
  return (
    <Row>
      <Col span={6}>
        <div className="flex justify-between">
        <Paragraph>Modules</Paragraph>
          <Button className="bg-[grey]" icon={<PlusCircleOutlined />} />
        </div>
      </Col>
      <Col span={18}>col-12</Col>
    </Row>
  );
}

export default App;
