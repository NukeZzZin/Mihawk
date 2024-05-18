import React from "react";
import Head from "next/head";

import Navbar from "@components/navbar";
import Footer from "@components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Mihawk - Dashboard</title>
      </Head>
      <Navbar/>
      <div className="">

      </div>
      <Footer/>
    </React.Fragment>
  )
}
