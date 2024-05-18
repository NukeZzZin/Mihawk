import React from "react";
import Head from "next/head";
import App from "next/app";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap"
});

import "@styles/globals.css"

export default class CustomApp extends App {
  render(): React.JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="robots" content="index, follow"/>
        </Head>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className={inter.className}>
            <div className="absolute z-0 flex flex-auto flex-col h-full w-full">
              <Component {...pageProps}/>
            </div>
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
