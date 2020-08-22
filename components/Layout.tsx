import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import importScript from './import-script';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  importScript('/js/prevent.flash.js');

  return (
    <>
      <Head />
      <Header/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;