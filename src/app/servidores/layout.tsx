import ServidorHeader from "@/components/headers/ServidorHeader";
import Navigation from "@/components/Navigation";
import SectionTwoS from "@/components/servidores/SectionTwoS";

import Footer from "@/components/Footer";
import { ReactNode } from "react";
import SectionThreeS from "@/components/servidores/SectionThreeS";
import SectionFourS from "@/components/servidores/SectionFourS";

export default function ServidoresLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ServidorHeader />
      {children}
      <SectionTwoS />
      <SectionThreeS />
      <SectionFourS />
      <Footer />
    </>
  );
}
