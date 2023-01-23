import Link from "next/link";

import {
  ShoppingBagIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

import SideNav from "./sideNav";

const Navbar = () => {


  return (
    <div>
      <div className="flex items-center justify-between w-11/12 mx-auto h-14">
        <nav>
          <Link href={'/Home'}>
          <h1 className="text-xl font-extrabold tracking-tighter text-gray-800">
            Sneakerstore
          </h1>
          </Link>
        </nav>
        <nav>
          <span className="flex items-center justify-around space-x-4 ">
          <Link href={'/Cart'}>
            <ShoppingBagIcon
              className="w-6 text-gray-900 cursor-pointer"
            />
           </Link>
            <Bars3BottomRightIcon className="w-6 text-gray-900 cursor-pointer" />
          </span>
        </nav>
      </div>
      <div className="hidden">
        <SideNav id="sideNav" />
      </div>
    </div>
  );
};

export default Navbar;
