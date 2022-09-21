import Link from "next/link";
import styles from "../styles/Nav.module.css";
// import NavToggle from "./NavToggle";
// import user from "../public/user.svg";
// import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <h3 className="block">Navigation: (placeholder)</h3>
      <div className={styles.menubtn}>
        <div className={styles.burger}></div>
      </div>
      {/* <NavToggle /> */}
      {/* <img src={user} alt="user icon" />
       */}
      {/* <Image src="/public/user.svg" alt="A user icon" height={30} width={30} /> */}
      {/* <img src="/eye.svg" alt="An SVG of an eye" /> */}
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/registration">
          <a>Registration</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/scheduling">
          <a>Schedule Appointment</a>
        </Link>
        <Link href="/patientInformation">
          <a>Patient Information</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
