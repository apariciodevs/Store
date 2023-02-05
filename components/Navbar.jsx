import Link from "next/link";
import { useState } from "react";


import {
  ShoppingBagIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import SideNav from "./sideNav";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>

      <div className="flex items-center justify-between w-11/12 h-20 mx-auto ">
        <nav>
          <Link href={"/Home"}>
            <h1 className="text-xl font-extrabold tracking-tighter text-gray-800">
              Sneakerstore
            </h1>
          </Link>
        </nav>

        <nav className="hidden space-x-4 font-semibold md:space-x-8 sm:block ">
          <Link href={"/"}>New & Featured</Link>
          <Link href={"/"}>Men</Link>
          <Link href={"/"}>Women</Link>
          <Link href={"/"}>Kids</Link>
          <Link href={"/"}>Sale</Link>
        </nav>

        <nav>
          <span className="flex items-center justify-around space-x-4 ">
            <Link href={"/Cart"}>
              <ShoppingBagIcon className="w-6 text-gray-900 cursor-pointer" />
            </Link>
            <div onClick={handleNav} className="cursor-pointer sm:hidden ">
              {nav ? <AiOutlineClose  size={25} /> : <RiMenu4Fill size={25} />}
            </div>
          </span>
        </nav>
      </div>
      <div className="hidden">
        <SideNav id="sideNav" />
      </div>



      {/* mobile nav*/}
      <aside
      id="sideNav"
      aria-label="Sidebar"
      className={
         nav
           ? "  absolute right-0 z-10 w-64  sm:hidden "
           : " absolute right-0 z-10 w-64  hidden"
       }
    >
      <div className="h-[100vh] mt-0 px-3 py-8 overflow-y-auto rounded bg-gray-50 ">
        <nav className="space-y-2">
          <div className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200">
            <Link href="#" className="ml-3 font-semibold">
              New & Featured
            </Link>
            <ChevronRightIcon className="w-5 text-gray-900 " />
          </div>
          <div className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200">
            <Link href="#" className="ml-3 font-semibold">
              Men
            </Link>
            <ChevronRightIcon className="w-5 text-gray-900 " />
          </div>
          <div className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200">
            <Link href="#" className="ml-3 font-semibold">
              Women
            </Link>
            <ChevronRightIcon className="w-5 text-gray-900 " />
          </div>
          <div className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200">
            <Link href="#" className="ml-3 font-semibold">
              Kids
            </Link>
            <ChevronRightIcon className="w-5 text-gray-900 " />
          </div>
          <div className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200">
            <Link href="#" className="ml-3 font-semibold">
              Sale
            </Link>
            <ChevronRightIcon className="w-5 text-gray-900 " />
          </div>
        </nav>
      </div>
    </aside>
    </div>
  );
};

export default Navbar;
