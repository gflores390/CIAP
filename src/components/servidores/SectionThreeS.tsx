"use client";

import { useState } from "react";
import styles from "@/styles/servidores/SectionThreeS.module.css";

interface ModuleContent {
  id: number;
  title: string;
  subtitle: string;
  objectives: string[];
}

const modulesData: ModuleContent[] = [
  {
    id: 1,
    title: "TIPO DE SERVIDORES",
    subtitle: "Fundamentos de servidores Linux y su entorno",
    objectives: [
      "Comprender el rol de los centros de procesamiento de datos (Data Center) y los servidores Linux.",
      "Aprender conceptos clave del software libre y su aplicación en entornos de servidores.",
      "Dominar los fundamentos de sistemas operativos Linux y su gestión mediante la línea de comandos.",
      "Configurar y gestionar servidores privados virtuales (VPS) en la nube.",
      "Entender la virtualización local y cómo crear entornos aislados.",
    ],
  },
  {
    id: 2,
    title: "CONEXIÓN REMOTA Y FUNDAMENTOS DE ADMINISTRACIÓN EN LINUX",
    subtitle: "Acceso remoto y gestión básica del sistema",
    objectives: [
      "Dominar la estructura de directorios del sistema de archivos Linux.",
      "Controlar la creación y gestión de usuarios y grupos.",
      "Administrar permisos de archivos y directorios para proteger el servidor.",
    ],
  },
  {
    id: 3,
    title: "INSTALACIÓN DE PAQUETES ESENCIALES",
    subtitle: "Configuración de servicios y sitios web",
    objectives: [
      "Modificar archivos de configuración de Apache para mejorar rendimiento y seguridad.",
      "Habilitar módulos y directorios en Apache para controlar el acceso.",
      "Practicar la habilitación y desactivación de sitios web.",
      "Monitorear logs del servidor para detectar actividades sospechosas.",
    ],
  },
  {
    id: 4,
    title: "SEGURIDAD",
    subtitle: "Protección del servidor Linux",
    objectives: [
      "Instalar y configurar un firewall para controlar el tráfico de red.",
      "Establecer conexiones SSH seguras.",
      "Gestionar accesos seguros del usuario Root y otros usuarios.",
      "Asegurar la integridad y disponibilidad del almacenamiento.",
      "Modificar archivos de configuración de Apache para optimizar su comportamiento.",
      "Instalar y configurar el servidor web Apache para alojar aplicaciones.",
    ],
  },
];

export default function SectionThreeS() {
  const [selectedModule, setSelectedModule] = useState(1);
  const moduleData = modulesData.find((mod) => mod.id === selectedModule);

  return (
    <section className={styles["section-five"]}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2 style={{ color: "#ffffff" }}>Información del Curso</h2>
        </div>
        {/* Módulos Tabs */}
        <div className={styles["class-nav"]}>
          <div className={styles["class-buttons"]}>
            {modulesData.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod.id)}
                className={`${styles["class-btn"]} ${
                  selectedModule === mod.id ? styles.active : ""
                }`}
              >
                <div className={styles["class-btn-number"]}>{mod.id}</div>
                <div className={styles["class-btn-text"]}>Módulo {mod.id}</div>
              </button>
            ))}
          </div>
        </div>
        {moduleData && (
          <div className={styles["main-content"]}>
            {/* Left Side */}
            <div className={styles["left-side"]}>
              <div className={styles["class-info-card"]}>
                <div className={styles["class-info-header"]}>
                  <div className={styles["class-info-icon"]}>
                    {moduleData.id}
                  </div>
                  <div className={styles["class-info-meta"]}>
                    <div className={styles["class-info-badge"]}>
                      Módulo {moduleData.id}
                    </div>
                    <div className={styles["class-info-type"]}>
                      Módulo del curso
                    </div>
                  </div>
                </div>
                <h3 className={styles["class-title"]}>{moduleData.title}</h3>
                <p className={styles["class-subtitle"]}>
                  {moduleData.subtitle}
                </p>
              </div>
              <div className={styles["objectives-summary"]}>
                <div className={styles["objectives-summary-header"]}>
                  <div className={styles["objectives-summary-icon"]}>!</div>
                  <h4 className={styles["objectives-summary-title"]}>
                    Objetivos de Aprendizaje
                  </h4>
                </div>
                <div className={styles["objectives-summary-text"]}>
                  En este módulo aprenderás {moduleData.objectives.length}{" "}
                  aspectos fundamentales sobre {moduleData.title.toLowerCase()}.
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className={styles["right-side"]}>
              <div className={styles["content-header"]}>
                <div className={styles["content-header-line"]}></div>
                <h4 className={styles["content-header-title"]}>
                  Contenido Detallado
                </h4>
              </div>
              <div className={styles["objectives-list"]}>
                {moduleData.objectives.map((objective, index) => (
                  <div key={index} className={styles["objective-item"]}>
                    <div className={styles["objective-number"]}>
                      {index + 1}
                    </div>
                    <p className={styles["objective-text"]}>{objective}</p>
                  </div>
                ))}
              </div>
              <div className={styles["progress-section"]}>
                <div className={styles["progress-header"]}>
                  <span className={styles["progress-label"]}>
                    Progreso del curso
                  </span>
                  <span className={styles["progress-count"]}>
                    {selectedModule}/4
                  </span>
                </div>
                <div className={styles["progress-bar"]}>
                  <div
                    className={styles["progress-fill"]}
                    style={{ width: `${(selectedModule / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
66;
