import React from "react";
import logo from "../../assets/svg/logo.svg"
import {Link} from "react-router-dom"
export default function TopBar() {
    return (
        <header className="w-full py-3 px-3 sm:px-10 md:px-20 shadow-md flex items-center justify-between bg-[#1B1127]">
              <div className="h-11 sm:h-16">
              <img src={logo} className="w-full h-full" alt="logo"/>

              </div>
                <nav className="hidden md:flex items-center gap-4 md:gap-6">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/">
                        Live Result
                    </Link>
                    <Link to="/">
                        Contact us
                    </Link>
                </nav>
                <button className="text-zinc-800 bg-[#3DDEED] font-normal rounded-sm px-4 sm:px-6 sm:py-3 py-2">Start Voting Now</button>
        </header>
    )
}