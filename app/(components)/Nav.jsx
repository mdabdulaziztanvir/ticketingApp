import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className=" text-black flex justify-between bg-nav p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ticketpage/new-ticket">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="text-default-text">
        <p>devwiz@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;