import React from 'react';

interface IContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ className, children }: IContainerProps) => {
  return <div className={`container mx-auto px-6 md:px-8 lg:px-6 ${className}`}>
    {children}
  </div>
}

export default Container;