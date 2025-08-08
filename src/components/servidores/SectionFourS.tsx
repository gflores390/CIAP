"use client";

import styles from "@/styles/servidores/SectionFourS.module.css";

export default function SectionFourS() {
  const paymentMethods = [
    { name: "PayPal", logo: "/image/l1.png" },
    { name: "Nequi", logo: "/image/l2.png" },
    { name: "Banco Interbank", logo: "/image/l3.png" },
    { name: "Yape (BCP)", logo: "/image/l4.png" },
  ]
  const whatsappNumber = "51906689567"
  const whatsappMessage = encodeURIComponent(
    "Hola, deseo información sobre las formas de pago para el curso de servidores.",
  )

  return (
    <section className={styles["section-seven"]} id="section-seven">
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2>Formas de Pago</h2>
          <p>Métodos disponibles según tu país</p>
        </div>
        <div className={styles["content-wrapper"]}>
          {/* Lado izquierdo - Imagen y WhatsApp */}
          <div className={styles["left-section"]}>
            <p className={styles["whatsapp-cta-text"]}>
              Comunícate con nosotros <span className={styles.arrow}>→</span>
            </p>
            <div className={styles["image-whatsapp"]}>
              <img src="/image/per1.png" alt="Asistente virtual" className={styles["main-image"]} />
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["whatsapp-btn"]}
                aria-label="Contactar por WhatsApp"
              >
                <img src="/image/what.png" alt="Icono de WhatsApp" className={styles["whatsapp-icon"]} />
              </a>
            </div>
          </div>
          {/* Lado derecho - Métodos de pago */}
          <div className={styles["right-section"]}>
            <h3>Métodos Disponibles</h3>
            <div className={styles["payment-grid"]}>
              {paymentMethods.map((method, index) => (
                <div key={index} className={styles["payment-item"]}>
                  <img src={method.logo || "/placeholder.svg"} alt={method.name} className={styles["payment-icon"]} />
                  <span className={styles["payment-name"]}>{method.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.countries}>
              <span>Disponible en:</span>
              <div className={styles.flags}>
                <img src="/image/v1.png" alt="Bandera de Colombia" className={styles.flag} />
                <img src="/image/v4.png" alt="Bandera de México" className={styles.flag} />
                <img src="/image/v2.png" alt="Bandera de Ecuador" className={styles.flag} />
                <img src="/image/v3.png" alt="Bandera de Perú" className={styles.flag} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
