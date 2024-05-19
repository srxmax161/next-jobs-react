"use client";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { isLoggedIn, logOut } from "@/utils/auth";
import Link from "next/link";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div className="navbar flex flex-row justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl h-12">
        Next Jobs
      </Link>
      <ul className="flex justify-evenly menu menu-horizontal px-5">
        <li>
          <Link href="/sign-up" className="btn btn-ghost p-4">
            Sign Up
          </Link>
        </li>
        <li className="flex items-center ">
          {loggedIn ? (
            <Link href="/" className="btn btn-ghost p-4 " onClick={logOut}>
              Log Out
            </Link>
          ) : (
            <Link href="/login" className="btn btn-ghost p-4">
              Log In
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;