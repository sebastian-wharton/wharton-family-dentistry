// import Link from "next/link";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import StaffCard from "../components/StaffCard";
import Link from "next/link";
import Image from "next/image";
import Burger from "../images/burger1.jpg";
// import Image from "next/image";
// import placeholder from "../public/img/1200x675.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div className="bg-[#f2f2f2] h-30 w-30 flex flex-wrap items-center justify-around min-h-[250px] py-4">
          <div className={styles.imgContainer}>
            <Image src={Burger} alt="picture of dental procedure" />
          </div>
          <div className="text-center block w-[100%] sm:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              molestias adipisci nobis voluptate incidunt!
            </p>
            <Link href="/scheduling">
              <button className="p-2 width-[%100] text-center text-[#f2f2f2] bg-blue-500 rounded-lg shadow-sm shadow-blue-500 m-4 uppercase">
                Schedule Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#fff] py-2 pb-8">
          <h2>Services</h2>
          <div className="grid grid-flow-row gap-4 px-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="bg-[#f2f2f2] py-2">
          <h2 className="mb-12">Meet our Staff</h2>
          <br />
          <div className="flex flex-row items-center p-2">
            <StaffCard />
            <StaffCard />
            <StaffCard />
          </div>
        </div>
      </div>
    </>
  );
}
