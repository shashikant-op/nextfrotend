'use client';
import Head from 'next/head';

const Pagetitle = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Pagetitle;
