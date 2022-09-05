import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <h3 className="block">Navigation: (placeholder)</h3>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/registration">
          <a>Registration</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/scheduling">
          <a>Schedule Appointment</a>
        </Link>
        <Link href="/patientInformation">
          <a>Patient Information</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
