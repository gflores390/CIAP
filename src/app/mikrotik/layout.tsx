import MikrotikHeader from "@/components/headers/MikrotikHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionOneM from "@/components/mikrotik/SectionOneM";
import { ReactNode } from "react";
import SectionTwoM from "@/components/mikrotik/SectionTwoM";
import SectionThreeM from "@/components/mikrotik/SectionThreeM";

export default function MikrotikLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MikrotikHeader />
      {/* <Navigation /> */}
      {children}
      <SectionOneM />
      <SectionTwoM />
      <SectionThreeM />
      <Footer />
    </>
  );
}
