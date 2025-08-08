"use client";
import { useState } from "react";
import type React from "react";

import styles from "@/styles/mikrotik/SectionTwoM.module.css";
import {
  BookOpen,
  Target,
  Shield,
  Server,
  Play,
  CheckCircle,
} from "lucide-react";

interface ModuleContent {
  id: number;
  title: string;
  subtitle: string;
  objectives: string[];
  icon: React.ReactNode;
  duration: string;
  difficulty: string;
}

const modulesData: ModuleContent[] = [
  {
    id: 1,
    title: "TIPO DE SERVIDORES",
    subtitle: "Fundamentos de servidores Linux y su entorno",
    icon: <Server className={styles.moduleIcon} />,
    duration: "8 horas",
    difficulty: "Básico",
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
    icon: <BookOpen className={styles.moduleIcon} />,
    duration: "10 horas",
    difficulty: "Intermedio",
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
    icon: <Target className={styles.moduleIcon} />,
    duration: "12 horas",
    difficulty: "Intermedio",
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
    icon: <Shield className={styles.moduleIcon} />,
    duration: "14 horas",
    difficulty: "Avanzado",
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

export default function SectionTwoM() {
  const [selectedModule, setSelectedModule] = useState(1);

  const moduleData = modulesData.find((mod) => mod.id === selectedModule);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Básico":
        return styles.basicLevel;
      case "Intermedio":
        return styles.intermediateLevel;
      case "Avanzado":
        return styles.advancedLevel;
      default:
        return styles.basicLevel;
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLine}></div>
          <h2 className={styles.title}>Módulos del Curso</h2>
        </div>

        <div className={styles.content}>
          {/* Module Cards */}
          <div className={styles.moduleCards}>
            {modulesData.map((module) => (
              <div
                key={module.id}
                className={`${styles.moduleCard} ${
                  selectedModule === module.id ? styles.active : ""
                }`}
                onClick={() => setSelectedModule(module.id)}
              >
                <div className={styles.moduleIconWrapper}>{module.icon}</div>
                <div className={styles.moduleNumber}>{module.id}</div>
                <h3 className={styles.moduleCardTitle}>Módulo {module.id}</h3>
                <div className={styles.moduleCardGlow}></div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className={styles.mainContent}>
            {moduleData && (
              <>
                {/* Module Header */}
                <div className={styles.moduleHeader}>
                  <div className={styles.moduleHeaderIcon}>
                    {moduleData.icon}
                  </div>
                  <div className={styles.moduleHeaderInfo}>
                    <div className={styles.moduleHeaderBadge}>
                      Módulo {moduleData.id} de 4
                    </div>
                    <h3 className={styles.moduleHeaderTitle}>
                      {moduleData.title}
                    </h3>
                    <p className={styles.moduleHeaderSubtitle}>
                      {moduleData.subtitle}
                    </p>
                  </div>
                  <div className={styles.moduleStats}>
                    <span className={styles.duration}>
                      <Play className={styles.metaIcon} />
                      {moduleData.duration}
                    </span>
                    <span
                      className={`${styles.difficulty} ${getDifficultyColor(
                        moduleData.difficulty
                      )}`}
                    >
                      {moduleData.difficulty}
                    </span>
                  </div>
                </div>

                {/* Objectives */}
                <div className={styles.objectivesList}>
                  {moduleData.objectives.slice(0, 3).map((objective, index) => (
                    <div key={index} className={styles.objectiveItem}>
                      <div className={styles.objectiveNumber}>
                        <CheckCircle className={styles.checkIcon} />
                        <span>{index + 1}</span>
                      </div>
                      <p className={styles.objectiveText}>{objective}</p>
                    </div>
                  ))}
                  {moduleData.objectives.length > 3 && (
                    <div className={styles.moreObjectives}>
                      +{moduleData.objectives.length - 3} objetivos más
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
