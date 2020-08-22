import React from 'react';
import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

interface IHeadProps {
  children?: React.ReactNode;
  title: string;
}

const Head = ({ children, title }: IHeadProps) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </>
);

export default Head;