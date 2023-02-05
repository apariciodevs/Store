import Image from "next/image";
import ImageResize from "./ImageResize";

import MidBlock from "./MidBlock";


const NewHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-screen px-6 mx-auto mt-8 lg:px-12">
      <h1 className="mb-6 text-2xl font-semibold uppercase ">Trending now</h1>
        <ImageResize />
        <MidBlock/>

      </div>
    </>
  );
};

export default NewHero;
