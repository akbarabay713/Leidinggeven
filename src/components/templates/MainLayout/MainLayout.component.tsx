import React from 'react';
import Header from './../../organisms/Header/Header';
import Footer from './../../organisms/Footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
         <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;