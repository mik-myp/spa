import React, { useEffect } from "react";
import { columns, data } from "./config";
import { Table } from "antd";
import { queryAdminList } from "./admin";

export default function Admin() {
  useEffect(() => {}, []);
  const hhh = () => {
    queryAdminList();
  };
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <button onClick={hhh}>123</button>
    </>
  );
}
