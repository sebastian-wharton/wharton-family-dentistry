// // import Modal from "./Components/Modal";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import logo from "../public/images/logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dentistry | Home</title>
      </Head>
      <Navbar />
      <Image src={logo} />

      <section>
        <h1>Services</h1>
        <div className="card">
          <h3>Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse,
            sunt nisi cupiditate praesentium officia.
          </p>
        </div>
      </section>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          porro nam possimus, voluptatem magni quisquam veniam nihil
          perspiciatis assumenda debitis vero quia sint expedita maxime.
        </p>
      </section>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          porro nam possimus, voluptatem magni quisquam veniam nihil
          perspiciatis assumenda debitis vero quia sint expedita maxime.
        </p>
      </section>
      <Footer />
      {/* Section1 - Schedule appt link */}
    </>
  );
}

// <div className="section1">
//   <div className="max-width[960px]">
//     <div className="float-left border-gray-400 border 2 w-5/12">
//       <p className="">
//         Today’s advanced dental treatments and materials can give you a
//         healthier, more complete smile that can last you a lifetime. Your
//         Mansfield, TX Dentist, Drs. Bauer or Bauer, can help revitalize
//         and maintain your teeth and gums, giving you the smile you’ve
//         always wanted.
//       </p>
//       <h3 className="font-bold">
//         Schedule an appointment online or call (817) 473-0291
//       </h3>
//       <button className="bg-m3 rounded-sm p-1 m-2 text-center">
//         <Link href="/Sched">
//           <a>Schedule Appointment</a>
//         </Link>
//       </button>
//     </div>
//     <div className="float-right h-20 w-20">
//       <Image src={smile} alt="Smiling woman" width={500} height={333} />
//     </div>
//   </div>
// </div>
// {/* Section2 - Services cards */}
// {/* Section3 - Quote */}
// <div className="absolute bottom-10 left-10 bg-indigo-500">
//   <h3>Section 3</h3>
//   <div className="bg-red-900">
//     <p>
//       Imagination, Innovation, Precision Our Mission is to change lives
//       through the highest quality dental care imaginable
//     </p>
//   </div>
// </div>
