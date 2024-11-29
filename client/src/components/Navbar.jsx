import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const blogName = "Shamily's Blog";
  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20 ">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4">
        {/* <img src={LOGO} alt="Logo" className="w-8 h-8" /> */}
        <Image alt="user_Logo" w={56} h={56} src="logo.jpg" className="rounded-lg"/>
        <p>{blogName}</p>
      </Link>

      {/* MOBILE */}
      <div className="md:hidden text-2xl font-bold flex flex-col px-5 cursor-pointer" onClick={handleMobileMenu}>
        {showMenu ? <IoMenu /> : <IoClose /> }
        {/* MOBILE MENU LIST */}
        {/* the menu list css is written with the conditional rendering here
            if hamburger menu is present not show the menu list if not show the menu list.
            this one is cool refer more
        */}
          <div
            className={` w-full h-screen bg-black top-20 absolute text-lg cursor-pointer py-10 text-white gap-8 items-center flex flex-col ${
              showMenu ?  "-right-[100%]" : "right-0" 
            } transition-all ease-in-out`}
          >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <button className="py-2 px-4 bg-blue-500 text-lg font-medium rounded-md">Login </button>
          </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-8 xl-gap-12 cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

      {/* clerk SignedOut will show the login btn */}
      <SignedOut>
        <Link to="/login">
        <button className="py-2 px-4 bg-blue-500 text-lg font-medium rounded-md">Login </button>
        </Link>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
        
      </div>

    </div>
  );
};

export default NavBar;
