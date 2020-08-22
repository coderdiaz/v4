import React from 'react';
import Head from './Head';
import SiteData from '../site.json';
import Header from './Header';
import Footer from './Footer';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <>
    <Head title={SiteData.site.title} />
    <Header/>
    {children}
    <Footer />
  </>
);

export default Layout;