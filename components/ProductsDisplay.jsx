import Image from "next/image";

import { ChevronRightIcon } from '@heroicons/react/24/outline'

const staticProducts = [
  {
    id: 1,
    name: "Air Jordan I High G",
    href: "#",
    price: "$220",
    imageSrc: "/shoes/airHigh.webp",
    imageAlt: "Air Jordan I High G."
  },
  {
    id: 2,
    name: "Jordan Delta 3 Mid",
    href: "#",
    price: "$220",
    imageSrc: "/shoes/Delta.webp",
    imageAlt: "Jordan Delta 3 Midshoe.",
  },
  {
    id: 3,
    name: "Air Jordan 6 Retro",
    href: "#",
    price: "$180",
    imageSrc: "/shoes/jordanRetro.webp",
    imageAlt: "Air Jordan 6 .",
  },
  {
    id: 4,
    name: "Air Jordan I Low G NRG",
    href: "#",
    price: "$200",
    imageSrc: "/shoes/low.webp",
    imageAlt: "Air Jordan I Low G NRG."
  },
  {
    id: 5,
    name: "Air Jordan I Low Pandas",
    href: "#",
    price: "$200",
    imageSrc: "/shoes/pandas.webp",
    imageAlt: "Air Jordan I Low Pandas."
  },
  {
    id: 6,
    name: "Air Force 1 07'",
    href: "#",
    price: "$200",
    imageSrc: "/shoes/Delta.webp",
    imageAlt: "Air force 1 07."
  },
  // More products...
];

const ProductsDisplay = () => {
  return (
    <div  className="px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

      <div className="flex items-center h-12 space-x-2">
      <h2 className="font-medium tracking-wide "> <span className="font-semibold tracking-tighter">Latest Drop</span> collection</h2>
      <ChevronRightIcon className="w-4 h-4 text-gray-900 "/>

    </div>
      <div id="drop" className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {staticProducts.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-4 aspect-h-3 ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover object-center w-full h-full group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
