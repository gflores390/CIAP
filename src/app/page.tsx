import HomeHeader from "@/components/headers/HomeHeader";
import Footer from "@/components/Footer";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import SectionFour from "@/components/home/SectionFour";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-blue-500 text-white">
        <SectionOne />

        {/* SVG ONDAS AZULES SOBRE FONDO #F0F1F2
        <div style={{ backgroundColor: "#F0F1F2" }}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "6rem", display: "block" }}
          >
            <defs>
              <linearGradient
                id="multiWaveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#DBDBDB" />
                <stop offset="100%" stop-color="#DBDBDB" />
              </linearGradient>
            </defs>

            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
               70.36-5.37,136.33-33.31,206.8-37.5,
               C438.64,32.43,512.34,53.67,583,72.05,
               c69.27,18,138.3,24.88,209.4,13.08,
               36.15-6,69.85-17.84,104.45-29.34,
               C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0.25"
              fill="url(#multiWaveGradient)"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,
               99.41,111.27,165,111,224.58,91.58,
               c31.15-10.15,60.09-26.07,89.67-39.8,
               40.92-19,84.73-46,130.83-49.67,
               36.26-2.85,70.9,9.42,98.6,31.56,
               31.77,25.39,62.32,62,103.63,73,
               40.44,10.79,81.35-6.69,119.13-24.28,
               s75.16-39,116.92-43.05,
               c59.73-5.85,113.28,22.88,168.9,38.84,
               30.2,8.66,59,6.17,87.09-7.5,
               22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.5"
              fill="url(#multiWaveGradient)"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57,
               c43-7.64,84.23-20.12,127.61-26.46,
               59-8.63,112.48,12.24,165.56,35.4,
               C827.93,77.22,886,95.24,951.2,90,
               c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="url(#multiWaveGradient)"
            />
          </svg>
        </div> */}

        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>

      <Footer />
    </>
  );
}
