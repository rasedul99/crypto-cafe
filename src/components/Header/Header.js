import React from "react";
import { Link } from "react-router-dom";
import CustomeLink from "../CustomeLink";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="hidden md:block">
        <Link to="/" className="font-sans font-bold text-xl text-grey-600">
          Cryto cafe
        </Link>{" "}
      </div>
      <div className="flex gap-4 text-xl">
        <CustomeLink to="/">Home</CustomeLink>
        <CustomeLink to="/coins">Coins</CustomeLink>
        <CustomeLink to="/contact">Contact</CustomeLink>
        <CustomeLink to="/about">About</CustomeLink>
      </div>
    </div>
  );
};

export default Header;
