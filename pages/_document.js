import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/Theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/ PWA primary color /}
          <meta
            key="theme-color"
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <link key="favicon" rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://fonts.google.com/share?selection.family=DM%20Serif%20Display%7CPublic%20Sans
