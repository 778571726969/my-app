import Navbar from "../mobileNav.tsx/Nav";
import Footer from "../footer/Footer";
import Image from "next/image";
const Male = () => {
  return (
    <main className="body">
      <div>
        <div className="mx-32 my-16">
          <div className="grid grid-cols-4 justify-items-center gap-16 ">
            {/* first  */}
            <div className="w-64">
              <Image
                src="/images/male1.png"
                alt="Description of the image"
                width={300}
                height={200}
                style={{ width: "100%", height: "75%" }}
              />

              <p className="text-lg mt-2 font-semibold tracking-wider">
                Flex Push Button Bomber
              </p>
              <p className="text-lg mt-2 font-normal tracking-wider">Jackets</p>
              <p className="text-lg mt-2 font-semibold tracking-wider">$225</p>
            </div>

            {/* second  */}
            <div className="w-64">
              <Image
                src="/images/male2.png"
                alt="Description of the image"
                width={300}
                height={200}
                style={{ width: "100%", height: "75%" }}
              />

              <p className="text-lg mt-2 font-semibold tracking-wider">
                Reglan Sweatshirt
              </p>
              <p className="text-lg mt-2 font-normal tracking-wider">Sweater</p>
              <p className="text-lg mt-2 font-semibold tracking-wider">$195</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Male;
