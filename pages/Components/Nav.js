import Image from "next/image";
//
import logo from "../../public/images/MFS-Logo.png";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="text-lg font-semibold">
      <div className="w-screen bg-red-900">
        <ul className="float-right">
          <Link href="/">
            <a className="p-2 border-b border-black">Home</a>
          </Link>
          <Link href="/About">
            <a className="p-2 border-b border-black">About</a>
          </Link>
          <Link href="/Sched">
            <a className="p-2 border-b border-black">Schedule Appointment</a>
          </Link>
          <Link href="/Services">
            <a className="p-2 border-b border-black">Services</a>
          </Link>
          <Link href="/PatientInfo">
            <a className="p-2 border-b border-black">Patient Information</a>
          </Link>
          <Link href="/Test">
            <a className="p-2 border-b border-black">Patient Test</a>
          </Link>
        </ul>

        <div className="float-left h-14 w-56 relative">
          <Image
            objectFit="cover"
            src={logo}
            alt="placeholder picture"
            layout="fill"
            className="border-r p-2 border-red-500"
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;
