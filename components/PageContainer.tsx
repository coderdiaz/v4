import React from 'react';

interface IContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return <div className={`container mx-auto max-w-3xl px-6 md:px-8 lg:px-6 ${className}`}>
    {children}
  </div>
}

export default Container;