"use client";
import styles from "@/styles/mikrotik/SectionThreeM.module.css";
import { MessageCircle, CreditCard, Smartphone, Building2 } from "lucide-react";

const paymentMethods = [
  {
    id: 1,
    name: "PayPal",
    description: "Pago seguro internacional",
    icon: <CreditCard className={styles.methodIcon} />,
    color: "paypal",
    available: true,
  },
  {
    id: 2,
    name: "Nequi",
    description: "Transferencia móvil Colombia",
    icon: <Smartphone className={styles.methodIcon} />,
    color: "nequi",
    available: true,
  },
  {
    id: 3,
    name: "Banco Interbank",
    description: "Transferencia bancaria Perú",
    icon: <Building2 className={styles.methodIcon} />,
    color: "interbank",
    available: true,
  },
];

export default function SectionThreeM() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Formas de Pago</h2>
          <div className={styles.headerLine}></div>
          <p className={styles.subtitle}>Métodos disponibles según tu país</p>
        </div>

        <div className={styles.content}>
          {/* Left Side - Character */}
          <div className={styles.leftSide}>
            <div className={styles.characterContainer}>
              <div className={styles.character}>
                <div className={styles.characterHead}>
                  <div className={styles.characterFace}>
                    <div className={styles.characterGlasses}></div>
                    <div className={styles.characterEyes}>
                      <div className={styles.eye}></div>
                      <div className={styles.eye}></div>
                    </div>
                    <div className={styles.characterSmile}></div>
                  </div>
                  <div className={styles.characterHair}></div>
                </div>
                <div className={styles.characterBody}>
                  <div className={styles.characterSuit}></div>
                  <div className={styles.characterArm}>
                    <div className={styles.characterHand}>
                      <div className={styles.pointingFinger}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.characterGlow}></div>
            </div>
          </div>

          {/* Center - WhatsApp */}
          <div className={styles.centerSection}>
            <div className={styles.whatsappContainer}>
              <div className={styles.whatsappIcon}>
                <MessageCircle className={styles.whatsappLogo} />
              </div>
              <div className={styles.whatsappGlow}></div>
              <div className={styles.whatsappPulse}></div>
            </div>
            <p className={styles.whatsappText}>Contáctanos por WhatsApp</p>
          </div>

          {/* Right Side - Payment Methods */}
          <div className={styles.rightSide}>
            <h3 className={styles.methodsTitle}>Métodos Disponibles</h3>
            <div className={styles.paymentMethods}>
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`${styles.paymentMethod} ${styles[method.color]}`}
                >
                  <div className={styles.methodIconContainer}>
                    {method.icon}
                  </div>
                  <div className={styles.methodInfo}>
                    <h4 className={styles.methodName}>{method.name}</h4>
                    <p className={styles.methodDescription}>
                      {method.description}
                    </p>
                  </div>
                  <div className={styles.methodStatus}>
                    <div className={styles.statusDot}></div>
                    <span className={styles.statusText}>Disponible</span>
                  </div>
                  <div className={styles.methodGlow}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
