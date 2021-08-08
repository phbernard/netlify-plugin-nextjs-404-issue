import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link, { LinkProps } from 'next/link';

export default function Page404() {
  return (
    <h1>404!</h1>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
