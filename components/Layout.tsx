import React from 'react';
import Header from '../components/Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <>
    <div className="h-1 bg-gradient-to-r from-primary-300 to-primary-800" />
    <Header/>
    {children}
  </>
);

export default Layout;