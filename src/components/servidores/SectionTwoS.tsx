"use client";

import type React from "react";
import styles from "@/styles/servidores/SectionTwoS.module.css";
import { Calendar, Clock, Book, Laptop } from "lucide-react";

const SectionTwoS: React.FC = () => {
  return (
    <section className={styles["section-four"]}>
      <div className={styles.container}>
        <header className={styles["section-header"]}>
          <h2>{"Section Header Title"}</h2>
        </header>

        <div className={styles["cards-grid"]}>
          <div className={styles["info-card"]}>
            <div className={styles["card-content"]}>
              <div className={styles["card-icon"]}>
                <Calendar />
              </div>
              <h3>Inicio de clases</h3>
              <p className={styles["card-date"]}>28 de Julio</p>
              <div className={styles["card-expanded"]}>
                <div className={styles["expanded-content"]}>
                  <p className={styles["expanded-title"]}>
                    Modalidad en Vivo Virtual
                  </p>
                  <p className={styles["expanded-desc"]}>
                    Clases interactivas con laboratorios prácticos en Maquinas
                    Virtuales
                  </p>
                  <div className={styles["expanded-badge"]}>
                    ¡Inscríbete ya!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["card-content"]}>
              <div className={styles["card-icon"]}>
                <Clock />
              </div>
              <h3>Duración</h3>
              <p className={styles["card-date"]}>3 semanas</p>
              <div className={styles["card-expanded"]}>
                <div className={styles["expanded-content"]}>
                  <p className={styles["expanded-title"]}>
                    Certificación Universitaria
                  </p>
                  <p className={styles["expanded-desc"]}>
                    Programa intensivo con práctica real en Maquinas Virtuales
                  </p>
                  <div className={styles["expanded-badge"]}>
                    Certificado CEUB
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["card-content"]}>
              <div className={styles["card-icon"]}>
                <Book />
              </div>
              <h3>Carga horaria</h3>
              <p className={styles["card-date"]}>130 horas académicas</p>
              <div className={styles["card-expanded"]}>
                <div className={styles["expanded-content"]}>
                  <p className={styles["expanded-title"]}>
                    80% práctico - 20% teórico
                  </p>
                  <p className={styles["expanded-desc"]}>
                    Laboratorios con servidores en Maquinas virtuales
                  </p>
                  <div className={styles["expanded-badge"]}>Hands-on</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["card-content"]}>
              <div className={styles["card-icon"]}>
                <Laptop />
              </div>
              <h3>Modalidad</h3>
              <p className={styles["card-date"]}>Virtual en Vivo</p>
              <div className={styles["card-expanded"]}>
                <div className={styles["expanded-content"]}>
                  <p className={styles["expanded-title"]}>Virtual</p>
                  <p className={styles["expanded-desc"]}>
                    Flexibilidad total para estudiar
                  </p>
                  <div className={styles["expanded-badge"]}>Flexible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoS;
