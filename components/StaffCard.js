import Image from "next/image";
import Burger from "../images/burger1.jpg";

const StaffCard = () => {
  return (
    <div className="m-2 dark:shadow-gray-200 duration-300 hover:-translate-y-1 bg-white shadow-md rounded-lg">
      <div className="flex justify-center md:justify-center py-2 -mt-16">
        <div>
          <Image
            src={Burger}
            alt="picture of dental procedure"
            className="w-32 h-32 object-center rounded-full border-2 border-indigo-500"
          />
        </div>
      </div>
      <div className="px-2 ">
        <h2 className="text-gray-800 text-3xl font-semibold ">Dr. Jones</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-lg font-medium text-indigo-500 px-4 pb-2 ">
          Position / Credentials
        </a>
      </div>
    </div>
  );
};

export default StaffCard;
