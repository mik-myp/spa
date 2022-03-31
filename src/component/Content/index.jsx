import React from "react";
import { Layout } from "antd";
import routes from "../../route";
import { useRoutes } from "react-router-dom";
const { Content} = Layout;

export default function Con() {
  const element = useRoutes(routes);
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {element}
    </Content>
  );
}
