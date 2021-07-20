import { navigateToUrl } from "single-spa";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";

export default function Root(props) {
  const [current, setCurrent] = useState('');
  const handleClick = (e) => {
    setCurrent(e.key);
    navigateToUrl('#/' + e.key);
  };
  useEffect(() => {
      setCurrent(window.location.hash.slice(2));
  }, [])

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="react" icon={<MailOutlined />}>
        React
      </Menu.Item>
      <Menu.Item key="" icon={<AppstoreOutlined />}>
        Vue
      </Menu.Item>
      <Menu.Item key="angular">Angular</Menu.Item>
    </Menu>
  );
}
