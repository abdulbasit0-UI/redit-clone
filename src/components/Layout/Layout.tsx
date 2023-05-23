import React from "react";
import Navbar from "../navbar/Navbar";

type pageLayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<pageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
