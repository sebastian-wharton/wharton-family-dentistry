// import Image from "next/image";
// import logo from "../public/img/1200x675.jpg";

const Header = () => {
  return (
    <div className="sticky bg-blue-400 text-white text-center flex items-center">
      <h1 className="m-auto">Dentistry</h1>
      <button className="text-white absolute left-2 self-auto uppercase border-black rounded-md">
        Button
      </button>
    </div>
  );
};

export default Header;
