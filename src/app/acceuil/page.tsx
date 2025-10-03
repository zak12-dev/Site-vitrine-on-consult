import React from "react";
import Header from "./header";
import Section1 from "./_components/section1";
import Section2 from "./_components/section2";
import Section3 from "./_components/section3";
import Footer from "./footer";

export default function Acceuil() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
