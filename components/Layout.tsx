import React from "react";
import Footer from "./Footer";
import Header from "./Header";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
