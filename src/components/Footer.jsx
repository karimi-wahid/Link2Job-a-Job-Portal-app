import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-2">
      <img src={assets.logo} width={160} alt="" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright &copy;Wahidullah_Karimi | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} width={38} alt="" />
        <img src={assets.instagram_icon} width={38} alt="" />
        <img src={assets.twitter_icon} width={38} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
