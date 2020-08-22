import React from 'react';
import Head from './Head';
import SiteData from '../site.json';
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
      <Head title={SiteData.site.title} />
      <Header/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;