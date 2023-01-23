export default function Cart() {
  return (
    <>
      <div className="h-[100vh]">
        <div className="flex flex-col items-center justify-center pt-10">
        <span className="leading-3 text-center">
          <h1 className="mb-0 text-2xl ">Bag</h1>
          <p className="mt-2 font-medium text-gray-500 text-md">
            0 Items |{" "}
            <span className="ml-2 font-semibold text-gray-900">—</span>{" "}
          </p>
          </span>
          <div className="w-full h-[0.8px] bg-gray-300 mt-16 "></div>
        </div>
        <p className="mt-4 ml-6 text-gray-900 text-medium text-semibold">
          There are no items in your bag.
        </p>
        <h1 className="mt-8 mb-6 ml-4 text-xl font-medium">Summary</h1>
        <p className="mt-2 ml-4 text-gray-900 text-md text-semibold">
          Subtotal
        </p>
        <div className="flex items-center justify-between">
          <p className="mt-2 ml-4 text-gray-900 text-md text-semibold">
            Estimated Delivery & Handling
          </p>
          <p className="mt-2 mr-4 text-gray-900 text-md text-semibold">Free</p>
        </div>
        <p className="mt-6 ml-4 mr-4 text-gray-900 text-md text-semibold">
          Total
        </p>

        <div>
          <h1 className="mt-12 ml-6 text-xl ">Favorites</h1>{" "}
          <p className="mt-2 ml-6 mr-4 text-gray-900 text-md text-semibold">
            Want to view your favourites?{" "}
            <span className="underline cursor-pointer underline-offset-2">
              Join
            </span>{" "}
            us or{" "}
            <span className="underline cursor-pointer underline-offset-2">
              Sign In
            </span>
          </p>
        </div>
       
      </div>
    </>
  );
}
