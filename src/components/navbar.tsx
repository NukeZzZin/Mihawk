import React from "react";
import Link from "next/link";
import Image from "next/image";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loginClickEvent = this.loginClickEvent.bind(this);
  }

  loginClickEvent(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <nav className="flex min-h-20 flex-wrap items-center justify-between px-12">
          <Link href="#" aria-label="Logo" className="mr-5">
            <Image aria-hidden={true} src="vercel.svg" height={128} width={96} loading="lazy" alt="perona"/>
          </Link>
          <div className="flex justify-center space-x-8">
            <Link href="#" aria-label="Home" className="font-medium hover:underline">Home</Link>
            <Link href="#" aria-label="About" className="font-medium hover:underline">About</Link>
            <Link href="#" aria-label="Devlog" className="font-medium hover:underline">Devlog</Link>
            <Link href="#" aria-label="Contact" className="font-medium hover:underline">Contact</Link>
          </div>
          <div className="flex justify-end">
            {/* <Link href="#" onClick={this.loginClickEvent} className="bg-violet-500 hover:text-violet-500 hover:bg-white font-semibold rounded-[2rem] px-4 py-2">Login</Link> */}
            <Link href="#" onClick={this.loginClickEvent} className="bg-violet-500 text-white hover:text-violet-500 hover:bg-white transition-all font-semibold rounded-[2rem] px-4 py-2">Login</Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
