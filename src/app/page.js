// import Header from "@/app/components/Header";
// import { Main } from "next/document";
// import Image from "next/image";
// import Hero from "./components/Hero";

import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyTeam from "./myteam/page";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <Gallery/>
      <MyTeam/>
    </div>
  );
}
