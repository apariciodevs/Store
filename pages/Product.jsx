import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart } from "react-icons/ai";

const staticProducts = [
  {
    id: 1,
    name: "Air Jordan I High G",
    description: "Men's Golf Shoes",
    href: "#",
    price: "$220",
    imageSrc: "/shoes/airHigh.webp",
    imageAlt: "Sand brown shoe.",
  },

  // More products...
];

export default function Product() {
  return (
    <div className="flex flex-col items-center min-h-screen md:flex-row">
      <div>
        {staticProducts.map((product) => (
          <div key={product.id} className="mt-12">
            <div className="px-6 md:hidden">
              <h1 className="text-2xl font-medium ">{product.name}</h1>
              <p className="mt-2 text-base">{product.description}</p>
              <h2 className="mt-4 text-lg font-medium">{product.price}</h2>
            </div>
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={800}
              height={600}
              className="mt-4 cursor-pointer "
            />
          </div>
        ))}
      </div>

      {/* -------------------sizing---------------------*/}

      <section className=" sm:p-10 mt-14 sm:mt-0">
        {staticProducts.map((product) => (
          <div key={product.id} className="px-6 mb-4">
            <h1 className="text-2xl font-medium ">{product.name}</h1>
            <p className="mt-2 text-base">{product.description}</p>
            <h2 className="mt-4 text-lg font-medium">{product.price}</h2>
          </div>
        ))}
        <div className="flex justify-between px-12 text-gray-700 text-md">
          <h1>Select size</h1>
          <h1>Size guide</h1>
        </div>
        <div className="grid grid-cols-3 gap-1 px-6 mt-2">
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md ">
            EU 40
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 40.5
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 41
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 42
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 42.5
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 43
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 44
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 44.5
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 45
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 46
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 46.5
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 47
          </div>
          <div className="col-span-1 py-3 text-center border-[1.4px] border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:border-gray-600 transition duration-100 text-gray-600 shadow-md">
            EU 48
          </div>
        </div>
        {/*----------------Buttons------------------*/}
        <div className="flex flex-col items-center pb-16 mt-4 gap-y-4">
          <button className="py-5 rounded-full px-44 bg-neutral-900 text-gray-50 hover:bg-neutral-900/70">
            Add to bag
          </button>
          <button className="py-5 border-[1.6px] rounded-full flex items-center gap-x-3 border-neutral-400 px-44 hover:border-neutral-800 ">
            Favorite <AiOutlineHeart />
          </button>
        </div>
      </section>
    </div>
  );
}
