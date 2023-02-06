import Image from "next/image";

const horizontalImageSrc = [
  {
    id: 1,
    src: "/horizontal/first.webp",
    heading: "Trending now",
    title: "Lighten up",
    text: "Refresh your palette with muted tones.",
    button: "Shop",
  },
  {
    id: 2,
    src: "/horizontal/second.webp",
    heading: "Jordan women ",
    title: "brooklyn fleece",
    text: "Laid-back and elevated.",
    button: "Shop",
  },
  {
    id: 3,
    src: "/horizontal/third.webp",
    heading: "Jordan men",
    title: "Lighten up",
    text: "Refresh your palette with muted tones",
    button: "Shop",
  },
  {
    id: 4,
    src: "/horizontal/fourth.webp",
    heading: "Jordan kids",
    title: "jordan 23/7",
    text: "Explore the latest in kids clothing.",
    button: "Shop",
  },
];

const verticalImageSrc = [
  {
    id: 1,
    src: "/vertical/first.webp",
    heading: "Trending now",
    title: "Lighten up",
    text: "Refresh your palette with muted tones",
    button: "Shop",
  },
  {
    id: 2,
    src: "/vertical/second.webp",
    heading: "Jordan Women",
    title: "brooklyn fleece",
    text: "Refresh your palette with muted tones",
    button: "Shop",
  },
  {
    id: 3,
    src: "/vertical/third.webp",
    heading: "Jordan Men",
    title: "Lighten up",
    text: "Refresh your palette with muted tones",
    button: "Shop",
  },
  {
    id: 4,
    src: "/vertical/fourth.webp",
    heading: "Jordan Kids",
    title: "Jordan 23/7",
    text: "Explore the latest in kids clothing.",
    button: "Shop",
  },
];

const ImageResize = (image) => {
  return (
    <>
      <div className="flex flex-col gap-y-20">
        {horizontalImageSrc.map((image) => (
          <div key={image.id} className="hidden sm:block">
            <h1 className="mb-6 text-2xl font-semibold uppercase ">
              {image.heading}
            </h1>
            <img
              src={image.src}
              alt={image.imageAlt}
              width={1200}
              height={800}
            />
            <div className="flex-col items-center hidden mt-10 sm:block lg:flex">
              <h1 className="text-5xl font-black uppercase">{image.title}</h1>
              <p className="mt-4 text-sm text-gray-700">{image.text}</p>
              <button className="px-6 py-2 mt-8 font-semibold text-white transition duration-300 bg-gray-900 rounded-3xl hover:bg-gray-900/70 ">
                {image.button}
              </button>
            </div>
          </div>
        ))}
        {verticalImageSrc.map((image) => (
          <div key={image.id} className="sm:hidden">
            <h1 className="mb-4 text-2xl font-semibold uppercase ">
              {image.heading}
            </h1>
            <img
              src={image.src}
              alt={image.imageAlt}
              width={1200}
              height={800}
            />
            <div className="flex-col items-center mt-10 lg:flex">
              <h1 className="text-5xl font-black uppercase">{image.title}</h1>
              <p className="mt-4 text-sm text-gray-700">{image.text}</p>
              <button className="px-6 py-2 mt-6 font-semibold text-white transition duration-300 bg-gray-900 rounded-3xl hover:bg-gray-900/80 ">
                {image.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageResize;
