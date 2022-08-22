// import Nav from "./components/Nav";
import Head from "next/head";
import Image from "next/image";
import smile from "../public/images/smiling.jpg";

const Test = () => {
  return (
    <>
      <Head>
        <title>Dentistry | Layout</title>
      </Head>

      {/* Nav */}
      <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    </nav>
      {/* login/signup */}
      {/* About Sections */}
      {/* Footer */}
    </>
  );
};

export default Test;
