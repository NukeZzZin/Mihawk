import React from "react";

import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);
    return {...initialProps};
  }

  render(): React.JSX.Element {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        </Head>
        <body className="scroll-smooth font-sans antialiased">
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
