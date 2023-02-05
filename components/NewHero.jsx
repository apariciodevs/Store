import Image from "next/image";
import ImageResize from "./ImageResize";



const NewHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-screen px-6 mx-auto mt-8 lg:px-12">
        <ImageResize />
      </div>
    </>
  );
};

export default NewHero;
