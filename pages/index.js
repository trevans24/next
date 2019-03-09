
import React, { Fragment, Component } from 'react'
import Head from 'next/head'

// Components
import Hero from '../components/Hero';

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <title>Troy Evans</title>
          <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" rel="prefetch" />
          <meta name="robots" content="index,follow" />
          <meta name="keywords" content="web developer Denver, full stack web developer Denver, react developer, SASS, node, front end developer Denver, software engineer denver" />
          <meta property="og:url" content="https://www.troyevans.co/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Troy Evans Portfolio Website" />
          <meta property="og:title" content="Troy Evans" />
          <meta property="twitter:title" content="Troy Evans" />
          <meta property="twitter:description" content="Troy Evans a Full stack web developer located in Denver, CO who works with new and emerging JavaScript frameworks such as React, technologies like Node, SASS, and Webpack. The right developer for your team to get the job done." />
          <meta property="og:description" content="Troy Evans a Full stack web developer located in Denver, CO who works with new and emerging JavaScript frameworks such as React, technologies like Node, SASS, and Webpack. The right developer for your team to get the job done." />
          <meta name="description" content="Troy Evans a Full stack web developer located in Denver, CO who works with new and emerging JavaScript frameworks such as React, technologies like Node, SASS, and Webpack. The right developer for your team to get the job done." />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126974816-1"></script>
        </Head>
        <Hero />
      </Fragment>
    )
  }
}
