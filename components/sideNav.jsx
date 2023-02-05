import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <aside
      id="sideNav"
      aria-label="Sidebar"
      className={
         nav
           ? "  absolute right-0 z-10 w-64  sm:hidden"
           : " absolute right-0 z-10 w-64  hidden"
       }
    >
      <div className="h-[100vh] mt-20 px-3 py-8 overflow-y-auto rounded bg-gray-50">
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
  );
};

export default SideNav;
