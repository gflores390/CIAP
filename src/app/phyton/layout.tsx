import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import PhytonHeader from '@/components/headers/PhytonHeader';


export default function ServidoresLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <PhytonHeader/>
      {children}
      <Footer />
    </>
  );
}
