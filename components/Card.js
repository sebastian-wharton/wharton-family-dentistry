import styles from "../styles/Home.module.css";
import Image from "next/image";
import Burger from "../images/burger1.jpg";

const Card = () => {
  return (
    <div className="my-2 shadow-md  shadow-gray-200 dark:shadow-gray-400 duration-300 hover:-translate-y-1 ">
      <div className="width-full min-h-[100px]  dark:bg-brown-900">
        <Image src={Burger} alt="picture of dental procedure" />
      </div>
      <div className="text-center bg-white py-1">
        <h3>Card Title</h3>
        <p className="text-left px-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia harum
          eos tempora, sed non alias.
        </p>
      </div>
    </div>
  );
};

export default Card;
