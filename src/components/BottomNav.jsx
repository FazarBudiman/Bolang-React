import { Button, Space } from "antd";
import { ContainerOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <Space className="bottom-nav">
      <Link to="/dashboard">
        <Button type="text" icon={<HomeOutlined />} size="large"></Button>
      </Link>
      <Link to="/history">
        <Button type="text" icon={<ContainerOutlined />} size="large"></Button>
      </Link>
      <Link to="/profile">
        <Button type="text" icon={<UserOutlined />} size="large"></Button>
      </Link>
    </Space>
  );
};

export default BottomNav;
