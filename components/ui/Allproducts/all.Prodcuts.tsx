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

export default async function AllProducts() {
  const data: Product[] = await ProductData();
  return (
    <main className="body">
      <div>
        <div className="sm:mx-2 lg:mx-32 my-16">
          <div className="grid sm:grid-cols-1 base:grid-cols-2 normal:grid-cols-3 xl:grid-cols-4 justify-items-center gap-16 ">
            {/* All PRoducts Details */}
            {data.map((item) => (
              <div className="w-4/5 mx-3">
                <Image
                  src={urlForImage(item.image).url()}
                  alt="Description of the image"
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "75%" }}
                  className="rounded-tl-[20px] rounded-br-[20px]"
                />
                <div className="text-base mt-2 font-semibold tracking-wide">
                  <p>{item.title}</p>
                  <p className="  font-normal ">{item.description}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
