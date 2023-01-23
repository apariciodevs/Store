import Image from "next/image";

import { ChevronRightIcon } from '@heroicons/react/24/outline'

const staticProducts = [
  {
    id: 1,
    name: "Sand Slides",
    href: "#",
    price: "$220",
    imageSrc: "/sand.png",
    imageAlt:
    "Sand brown shoe."
  },
  {
    id: 2,
    name: "Bone Slides",
    href: "#",
    price: "$220",
    imageSrc: "/bone.png",
    imageAlt:
      "Cream white shoe.",
  },
  {
    id: 3,
    name: "Orange Slides",
    href: "#",
    price: "$180",
    imageSrc: "/orange.png",
    imageAlt:
      "Orange Shoe.",
  },
  {
    id: 4,
    name: "Green Slides",
    href: "#",
    price: "$200",
    imageSrc: "green.png",
    imageAlt:
    "Lime green Shoe."
  },
  // More products...
];

const ProductsDisplay = () => {
  return (
    <div  className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

      <div className="flex items-center h-12 space-x-2">
      <h2 className="font-medium tracking-wide "> <span className="font-semibold tracking-tighter">Yeezy Slides</span> collection</h2>
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
