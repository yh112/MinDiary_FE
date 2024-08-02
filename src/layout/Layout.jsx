import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#f5f4f7" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
