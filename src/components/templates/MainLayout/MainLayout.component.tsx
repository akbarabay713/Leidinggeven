"use client";
import React from "react";
import Header from "./../../organisms/Header/Header";
import Footer from "./../../organisms/Footer/Footer";
import ModalProvider from "../../molecules/ModalProvider/ModalProvider";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <ModalProvider />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
