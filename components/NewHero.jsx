import Image from "next/image";

const NewHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-screen mx-auto mt-8">
        <div className="px-6 lg:px-12">
          <h1 className="mb-6 text-2xl font-semibold uppercase ">Trending now</h1>
          <Image className="hidden sm:block" src={"/bannerblue.webp"} width={1200} height={800} />
          <Image className="sm:hidden" src={"/vertical/verticalOne.webp"} width={600} height={400} />
        {/*----------Mid Section---------- */}
          <div className="mt-8">
            <h1 className="text-5xl font-black uppercase">Lighten up</h1>
            <p className="mt-4 text-md">Refresh your palette with muted tones</p>
            <button className="px-6 py-2 mt-4 font-semibold text-white transition duration-300 bg-gray-900 rounded-3xl hover:bg-gray-900/70 ">Shop</button>
        </div>
        </div>
       
      
      </div>
    </>
  );
};

export default NewHero;
