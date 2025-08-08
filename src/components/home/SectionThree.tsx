"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home/Three-home.module.css";

const textos = [
  "Elige crecer con nosotros.",
  "Formación que impulsa tu éxito.",
  "Aprende con calidad y flexibilidad.",
  "Educación pensada para ti.",
  "Tu aprendizaje, sin fronteras.",
];

export default function SectionThree() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(textos[0]);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // Rutas de imagen reales desde la carpeta public
  const imagenes = Array.from({ length: 8 }, (_, i) => `/image/g${i + 1}.webp`);
  const [imgIndex, setImgIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  // Efecto de escritura letra por letra
  useEffect(() => {
    const typing = setInterval(() => {
      if (charIndex < fullText.length) {
        setText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [fullText, charIndex]);

  // Cambiar texto cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (textIndex + 1) % textos.length;
      setFullText(textos[nextIndex]);
      setCharIndex(0);
      setText("");
      setTextIndex(nextIndex);
    }, 10000);
    return () => clearInterval(interval);
  }, [textIndex]);

  // Carrusel de imágenes con giro
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % imagenes.length);
        setFlipping(false);
      }, 800); // Coincide con la duración de la transición CSS (0.8s)
    }, 4000); // Intervalo entre cada giro
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.trapezoidShape}>
          <span className={styles.trapezoidText}>{text}</span>
        </div>
        {/* Carrusel a la derecha */}
        <div className={styles.flipContainer}>
          <div className={`${styles.flipCard} ${flipping ? styles.flip : ""}`}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <Image
                  src={imagenes[imgIndex] || "/placeholder.svg"}
                  alt={`Imagen ${imgIndex + 1}`}
                  width={556} // Ancho rectangular
                  height={313} // Alto rectangular
                  className={styles.image}
                  priority={true} // Carga la primera imagen con prioridad
                />
              </div>
              <div className={styles.flipBack}>
                <Image
                  src={
                    imagenes[(imgIndex + 1) % imagenes.length] ||
                    "/placeholder.svg"
                  }
                  alt={`Imagen ${((imgIndex + 1) % imagenes.length) + 1}`} // Alt text para la siguiente imagen
                  width={556} // Ancho rectangular
                  height={313} // Alto rectangular
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
