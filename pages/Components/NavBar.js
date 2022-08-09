import Image from "next/image";
import smile from "../../public/images/smiling.jpg";

import whiten from "../../public/images/whiten.jpg";
import brush from "../../public/images/brush.jpg";
import dent from "../../public/images/dent.jpg";
import operation from "../../public/images/operation.jpg";

const NavBar = () => {
  return (
    <div className="bg-c6 text-c1">
      <nav>
        <div className="flex font-title-900 justify-start text-lg px-8 py-3">
          <p>Family Dentistry</p>
        </div>
        <ul className="flex justify-end p-3 text-right font-body">
          <li className="mr-3">A</li>
          <li className="mr-3">B</li>
          <li className="mr-3">C</li>
          <li className="mr-3">D</li>
        </ul>
      </nav>

      <div className="section1">
        <p className="font-body w-80 text-center float-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius
          omnis, enim perspiciatis eum perferendis tempore cumque dignissimos
          qui molestias assumenda, corporis optio quaerat veniam possimus ea
          nulla nesciunt sint?
        </p>
        <div className="">
          <Image
            objectFit="cover"
            src={smile}
            alt="placeholder picture"
            width={672}
            height={448}
          ></Image>
        </div>
      </div>

      <div className="section2">
        <h1 className="text-title font-semibold text-3xl mt-4 pb-2 underline underline-offset-4 decoration-2 text-center  ">
          Services
        </h1>

        <div className="mb-6">
          <div className="flex justify-center">
            <div className="bg-white h-96 w-60 m-5 rounded-lg overflow-hidden shadow-lg">
              <Image
                objectFit="cover"
                src={whiten}
                alt="placeholder picture"
                width={672}
                height={448}
              ></Image>
              <div className="m-1 mt-0 pl-1">
                <span className="font-title font-semibold block text-xl underline underline-offset-4 decoration-1 text-center mb-1">
                  Teeth Whitening
                </span>
                <span className="text-gray-500 text-md font-body">
                  Having a beautiful smile may be even easier than you think.
                  Many people achieve the look they’ve been dreaming of with our
                  simple “bleaching” procedure.
                </span>
              </div>
            </div>
            <div className="bg-white h-96 w-60 m-5 rounded-lg overflow-hidden shadow-lg">
              <Image
                objectFit="cover"
                src={brush}
                alt="placeholder picture"
                width={672}
                height={448}
              ></Image>
              <div className="m-1 mt-0 pl-1">
                <span className="font-title font-semibold block text-xl underline underline-offset-4 decoration-1 text-center mb-1">
                  Dental Filings
                </span>
                <span className="text-gray-500 text-md font-body">
                  Porcelain inlays and Tooth Colored Restorations (onlays)
                  create fillings that are not only beautiful (or unnoticeable),
                  but also add strength to weakened teeth.
                </span>
              </div>
            </div>
            <div className="bg-white h-96 w-60 m-5 rounded-lg overflow-hidden shadow-lg">
              <Image
                objectFit="cover"
                src={dent}
                alt="placeholder picture"
                width={672}
                height={448}
              ></Image>
              <div className="m-1 mt-0 pl-1">
                <span className="font-title font-semibold block text-xl underline underline-offset-4 decoration-1 text-center mb-1">
                  Dentures
                </span>
                <span className="text-gray-500 text-md font-body">
                  A replacement for natural teeth that provides support for the
                  cheeks and lips. Dentures over a normal course of time will
                  wear and need to be replaced or relined in order to keep the
                  jaw alignment normal.
                </span>
              </div>
            </div>
            <div className="bg-white h-96 w-60 m-5 rounded-lg overflow-hidden shadow-lg">
              <Image
                objectFit="cover"
                src={operation}
                alt="placeholder picture"
                width={672}
                height={448}
              ></Image>
              <div className="m-1 mt-0 pl-1">
                <span className="font-title font-semibold block text-xl underline underline-offset-4 decoration-1 text-center mb-1">
                  Root Canals
                </span>
                <span className="text-gray-500 text-md font-body">
                  Well over 14 million Root Canals are performed every year.
                  This simple treatment can save your natural teeth and prevent
                  the need of dental implants or bridges.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex m-20 p-20 rounded-r-lg border-l-c1-700 align-middle w-9/12 h-20 bg-c3">
          <h2 className="flex-justify-center flex-items-center text-c2 text-xl italic">
            Imagination, Innovation, Precision Our Mission is to change lives
            through the highest quality dental care imaginable
          </h2>
          <div className=""></div>
        </div>
      </div>
      <div className="section3"></div>
      <footer></footer>
    </div>
  );
};
export default NavBar;
