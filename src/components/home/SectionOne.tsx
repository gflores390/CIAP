"use client";

import Image from "next/image";
import styles from "@/styles/Home/One-home.module.css";

export default function SectionOne() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          src="/image/bannerhome/banner3.jpg"
          alt="Banner"
          width={1280}
          height={720}
          className={styles.halfBannerImage}
          priority
        />
      </div>
    </div>
  );
}
