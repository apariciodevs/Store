import Image from "next/image";

const horizontalImageSrc = [
  {
    id: 1,
    src: "/bannerBlue.webp",
  },
];

const verticalImageSrc = [
  {
    id: 1,
    src: "/vertical/verticalOne.webp",
  },
];

const ImageResize = (imageH, imageV) => {
  return (
    <>
      <div>
        {horizontalImageSrc.map((image) => (
          <Image
            src={image.src}
            alt={image.imageAlt}
            width={1200}
            height={800}
            className="hidden sm:block"
          />
        ))}
      </div>
      <div>
        {verticalImageSrc.map((image) => (
          <Image
            src={image.src}
            alt={image.imageAlt}
            width={1200}
            height={800}
            className="sm:hidden"
          />
        ))}
      </div>

      {/* 
        <Image
          className="hidden sm:block"
          src={"/bannerblue.webp"}
          width={1200}
          height={800}
        />
        <Image
          className="sm:hidden"
          src={"/vertical/verticalOne.webp"}
          width={600}
          height={400}
        />
        */}
    </>
  );
};

export default ImageResize;
