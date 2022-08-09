// import Image from "next/image";
// import logo from "../public/images/MFS-Logo.png";
// import smile from "../public/images/smiling.jpg";
import Modal from "./Components/Modal";
import NavBar from "./Components/NavBar";


export default function Home() {
  return (
    <div>
        <NavBar></NavBar>







      {/* <br />
      <h1>Hello World!</h1>
      <p className="text-3xl font-bold underline">
        Hello world! Wharton Family Dentistry is up & running with Tailwind &
        Next JS!!
      </p>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={logo}
          alt="Mansfield Family Dentistry Logo"
          layout="fill"
          priority
        />
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={smile}
          alt="Picture of smiling woman"
          layout="fill"
          priority
        />
      </div> */}
      
      {/* <Modal>
        <h2>Login</h2>
        <p>Username</p>
        <p>Password</p>
      </Modal> */}
      
    </div>
  );
}
