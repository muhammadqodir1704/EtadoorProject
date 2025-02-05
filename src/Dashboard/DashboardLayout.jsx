import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout className="h-screen  ">
      {/* Chap tomon Sidebar */}
      <Sider width={240} className="fixed  left-0 top-[64px] h-full p-3">
        <Sidebar />
      </Sider>

      {/* Asosiy Layout */}
      <Layout
        style={{
          marginLeft: 240, // Sidebar kengligi bilan mos keladi
        }}
      >
        {/* Header tepada */}
        <Header
          className=" px-5 bg-[#272246] text-white w-full fixed top-0 left-0 right-0"
          style={{
            zIndex: 1000,
          }}
        >
          <Navbar />
        </Header>

        {/* Content markazda */}
        <Content
          className="p-3 bg-[#001529]  "
          style={{
            marginTop: 64, // Header balandligi
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
