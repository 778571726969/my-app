import Image from "next/image";
import { client } from "../../../sanity/lib/client";

import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
export const ProductData = async () => {
  const response = await client.fetch(
    `*[_type=="product"]{title,description,price,category ->{name},image}`
  );
  return response;
};

interface Product {
  title: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
}
const Products = async () => {
  const data: Product[] = await ProductData();
  const dataDisplay = data.slice(0, 3);
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

        <div className="xl:grid xl:grid-cols-3  sm:hidden  ">
          {dataDisplay.map((item) => (
            <div className=" grid h-full w-full hover:transition-[1.5] hover:scale-110 ease-linear duration-300">
              <div>
                <img
                  src={urlForImage(item.image).url()}
                  alt="Description of the image"
                  className="h-11/12 w-11/12  rounded-xl"
                />
                <div className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
                  <p>{item.title}</p>

                  <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" xl:hidden sm:grid  sm:w-auto h-auto text-center  px-0   justify-items-center ">
          <div className=" hover:transition-[1.5]  hover:scale-110 ease-linear duration-300">
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
