


const Hero = () => {
    return ( 
        <section className="bgImg">
        <div className="px-6 lg:px-8">
        <div className="max-w-3xl pt-20 pb-32 mx-auto sm:pt-20 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6   bg-gray-900/90  ">
                <span className="text-gray-100">
                  Announcing our next drop soon.{" "}
                  <a href="#" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-yellow-200">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Know first <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-6xl font-extrabold leading-tight tracking-tighter text-gray-50 sm:text-center sm:text-6xl ">They are finally here, 
                find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-yellow-800">Yeezy Slides </span> now{" "}
                
              </h1>
             
              <div className="flex mt-14 gap-x-4 sm:justify-center ">
                <a
                  href="#drop"
                  className="inline-block px-4 py-2 font-medium leading-7 uppercase rounded-lg text-gray-90 bg-gray-50/90 sm:px-5 sm:py-3 "
                  >
                    
                  Go to Drop{" "}
                </a>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
             
            </div>
          </div>
        </div>
      </div>
     </section>
     );
}
 
export default Hero;