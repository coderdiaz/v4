import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import importScript from './import-script';

interface ILayoutProps {
  language?: string;
  children?: React.ReactNode;
}

const Layout = ({ children, language = 'es' }: ILayoutProps) => {
  importScript('/js/prevent.flash.js');

  return (
    <>
      <Header language={language} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;