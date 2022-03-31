import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import menuList from "./config";

const { SubMenu } = Menu;
const { Sider } = Layout;
export default function Side() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        {menuList.map((item) => (
          <SubMenu key={item.id} title={item.title}>
            {item.children?.map((child) => (
              <Menu.Item key={child.id}>
                <Link to={child.path}>{child.title}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
}
