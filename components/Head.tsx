import React from 'react';
import NextHead from 'next/head';
import SiteData from '../site.json';
import { useRouter } from 'next/dist/client/router';

interface IHeadProps {
  children?: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
  };
}

const Head = ({ children, meta = {} }: IHeadProps) => {
  const router = useRouter();
  return <>
    <NextHead>
      <title>{meta.title || SiteData.site.en.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta content={meta.description || SiteData.site.en.description} name="description" />
      <meta content={meta.keywords ? meta.keywords.join(',') : SiteData.site.en.keywords.join(',')} name="keywords" />
      <meta property="og:url" content={`https://coderdiaz.me${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title || SiteData.site.en.title } />
      <meta property="og:image" content={meta.image || SiteData.site.en.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@coderdiaz" />
      <meta name="twitter:title" content={meta.title || SiteData.site.en.title} />
      <meta name="twitter:description" content={meta.description || SiteData.site.en.description} />
      <meta name="twitter:image" content={`https://coderdiaz.me${meta.image || SiteData.site.en.image}`} />
      {children}
    </NextHead>
  </>
};

export default Head;