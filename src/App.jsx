import React from "react";
import { Layout } from "antd";
import Head from "./component/Header";
import Side from "./component/Sider";
import Con from "./component/Content";
import "./App.css";

export default function App() {
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Head />
        <Layout>
          <Side />
          <Layout style={{ padding: "24px" }}>
            <Con />
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
