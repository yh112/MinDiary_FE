import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
