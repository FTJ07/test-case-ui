import React from "react";
import { Modal, Form, Input } from "antd";

const CreateModal = ({ title, isModalOpen, handleCancel, handleOk, confirmLoading }) => {
  const [form] = Form.useForm();

  const handleClick = async () => {
    try {
      await form.validateFields();
      handleOk(form.getFieldsValue());
      form.resetFields();
    } catch {}
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleClick}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        layout="vertical"
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          label="Name"
          name="name"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal;
