const Products = () => {
  return (
    <main className=" sm:pt-20 xl:pt-40">
      <div>
        {/* subtitle  */}
        <div className="subtitle text-center flex flex-col  mdd:mb-8 sm:mb-4 font-bold">
          <span className="tracking-widest text-blue-800 mdd:text-lg sm:text-sm">
            PRODUCTS
          </span>
          <h1 className="mdd:text-4xl sm:text-lg tracking-wider">
            Check What we Have
          </h1>
        </div>

        {/* products details  */}
        <div className="xl:grid xl:grid-cols-3  sm:grid sm:justify-items-center ">
          <div className="sm:hidden xl:grid xl:h-full xl:w-full hover:transition-[1.5] hover:scale-110 ease-linear duration-300">
            <img
              src="/images/product1.png"
              alt=""
              className="h-11/12 w-11/12  rounded-xl"
            />
            <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
              Brushed Raglan Sweatshirt
            </p>
            <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
              $195
            </p>
          </div>
          <div className="sm:hidden xl:grid xl:h-full xl:w-full hover:transition-[1.5] hover:scale-110 ease-linear duration-300">
            <img
              src="/images/product2.png"
              alt=""
              className="h-11/12 w-11/12  rounded-xl"
            />
            <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
              Cameryn Sash Tie Dress
            </p>
            <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
              $545
            </p>
          </div>
          <div className="  xl:h-11/12 xl:w-11/12 sm:w-auto sm:h-auto sm:text-center xl:text-start xl:px-0  xl:hover:transition-[1.5] xl:hover:scale-110 xl:ease-linear duration-300">
            <img src="/images/product3.png" alt="" className="  rounded-xl" />
            <p className="font-semibold text-lg mdd:mt-2 sm:mt-1 text-slate-800 mdd:tracking-wider sm:tracking-normal px-2 ">
              Flex Sweatshirt
            </p>
            <p className="font-semibold mdd:text-lg sm:text-base mdd:mt-2 sm:mt-1 text-slate-800 tracking-wider px-2">
              $175
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
