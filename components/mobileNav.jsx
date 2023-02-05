import Link from "next/link";

import {
    ShoppingBagIcon,
    Bars3BottomRightIcon,
  } from "@heroicons/react/24/outline";

const mobileNav = () => {
    return(
        <div>
        {/* mobile nav*/}

        <nav
          id="mobileNav"
          className="z-50 active:flex absolute flex-col w-[100vw] space-y-4 font-semibold mt-0 hidden bg-slate-50  py-8 px-6"
        >
          <Link href={"/"}>New & Featured</Link>
          <Link href={"/"}>Men</Link>
          <Link href={"/"}>Women</Link>
          <Link href={"/"}>Kids</Link>
          <Link href={"/"}>Sale</Link>
        </nav>
      </div>
    )
}

export default mobileNav;