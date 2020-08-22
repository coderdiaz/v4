import React from 'react';
import Head from './Head';
import SiteData from '../site.json';
import Header from '../components/Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <>
    <Head title={SiteData.site.title} />
    <Header/>
    {children}
  </>
);

export default Layout;