import React from "react";
import Logo from "../images/h4i_logo.svg";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='navbar-brand px-2 mr-0'>
        <img
          src={Logo}
          alt='h4i_logo'
          style={{ maxHeight: "60%", width: "80%" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
