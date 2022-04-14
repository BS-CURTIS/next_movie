import dynamic from "next/dynamic";
import Head from "next/head";
import Nav from "./nav";

// const Nav = dynamic(() => import("./nav"), { ssr: false });
const Header = () => {
  return (
    <>
      <Head>
        <title>movie ranking</title>
      </Head>
      <header>
        <Nav />
      </header>
    </>
  );
};

export default Header;
