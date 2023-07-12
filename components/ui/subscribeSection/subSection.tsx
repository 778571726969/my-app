const Subscribes = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center text-center pt-40 py-10  ">
        <h1 className="mb-5 font-bold mdd:text-3xl sm:text-lg tracking-wider">
          Subscribe Our Newsletter
        </h1>
        <p className="mb-8 font-normal text-base">
          Get the latest information and promo offers directly
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter email address"
            className="py-1 px-5 bg-[#fbfcff] border
          border-solid border-gray-500 outline-none rounded"
          />
          <button className=" mdd:ml-6 py-1 px-5 bg-slate-600 text-white font-semibold text-base rounded hover:shadow-md hover:shadow-slate-700 sm:mt-6 md:mt-0">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};
export default Subscribes;
