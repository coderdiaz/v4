import React from 'react';
import Header from '../components/Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <>
    <Header/>
    {children}
  </>
);

export default Layout;