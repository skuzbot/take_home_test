import { Component } from 'react';
import Head from 'next/head';

const Meta = () => {
  return (
    <div>
      <Head>
        <title>Take Home Box Id Challenge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet"/>
      </Head>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #D0D4D9;
          font-family: 'Fira Mono', monospace;
          height: 100%;
          cursor: default;
        }

        button {
          cursor: pointer;
        }

        .content {
          min-height: calc(100vh - 60px);
        }
      `}</style>
    </div>
  )
}

export default Meta;