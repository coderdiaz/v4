import React from 'react';

interface IContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <div className="container mx-auto max-w-2xl px-6 md:px-8 lg:px-6">
    {children}
  </div>
}

export default Container;