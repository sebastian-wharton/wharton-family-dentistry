import styles from "../styles/Home.module.css";

const Card = () => {
  return (
    <div className="my-2 shadow-xl shadow-gray-200 dark:shadow-gray-900 duration-300 hover:-translate-y-1">
      <div className="bg-orange-300  min-h-[100px] dark:bg-brown-900 width-full">
        Card Img Placeholder
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
