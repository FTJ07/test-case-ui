import React from "react";
import { DashOutlined, DownOutlined, ExclamationCircleFilled, SmallDashOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Modal, Tree } from "antd";

const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};


const items: MenuProps["items"] = [
  {
    label: "Add feature",
    key: "1",
  },
  {
    label: "Edit",
    key: "2",
  },
  {
    label: <div onClick={showDeleteConfirm}> Delete </div>,
    key: "3",
  },
];

const renderNodeTitle = (nodeData) => {
  return (
    <div key={nodeData.key} className="flex justify-between w-[120px] py-1">
      {nodeData.title}
      <Dropdown menu={{ items }}>
      <DashOutlined rotate={90} className="text-[14px] text-neutral-950 font-[800px]" />
      </Dropdown>
    </div>
  );
};

const ModuleList: React.FC<any> = ({ list }) => {
  const treeData = list.map((item) => {
    return {
      title: item.name,
      key: item._id,
    };
  });
  return (
    <Tree
      className="bg-[#ebebeb]"
      showIcon
      defaultExpandAll
      defaultSelectedKeys={["0-0-0"]}
      switcherIcon={<DownOutlined />}
      treeData={treeData}
      titleRender={renderNodeTitle}
    />
  );
};

export default ModuleList;
