"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Crown,
  Clock,
  Users,
  BookOpen,
  X,
  Play,
  FileText,
  Zap,
} from "lucide-react";
import styles from "@/styles/Home/Two-home.module.css";

interface Module {
  id: number;
  title: string;
  duration: string;
  type: "video" | "document" | "quiz";
}

interface Course {
  id: number;
  title: string;
  description?: string;
  image: string;
  type: "virtual" | "moodle" | "presencial";
  category: string;
  isPremium: boolean;
  rating?: number;
  duration?: string;
  students?: number;
  startDate?: string;
  instructor?: string;
  price?: string;
  modules?: Module[];
}

const courses: Course[] = [
  // Laravel Courses (existing)
  {
    id: 1,
    title: "Laravel Fundamentos",
    image: "/image/laravel.png",
    type: "virtual",
    category: "Laravel",
    isPremium: false,
    rating: 5,
    duration: "8 sem",
    students: 1200,
    startDate: "15 Ago 2024",
    instructor: "Maria Silva",
    price: "S/ 199",
    modules: [
      { id: 1, title: "Introducción a Laravel", duration: "2h", type: "video" },
      { id: 2, title: "Rutas y controladores", duration: "3h", type: "video" },
      { id: 3, title: "Blade templates", duration: "2h", type: "video" },
    ],
  },
  {
    id: 2,
    title: "Laravel Avanzado",
    image: "/image/laravel.png",
    type: "virtual",
    category: "Laravel",
    isPremium: true,
    rating: 5,
    duration: "12 sem",
    students: 850,
    startDate: "20 Ago 2024",
    instructor: "Carlos Rodriguez",
    price: "S/ 299",
    modules: [
      { id: 1, title: "Eloquent avanzado", duration: "4h", type: "video" },
      { id: 2, title: "APIs REST", duration: "5h", type: "video" },
      { id: 3, title: "Testing", duration: "3h", type: "video" },
    ],
  },
  {
    id: 3,
    title: "Laravel E-commerce",
    image: "/image/laravel.png",
    type: "presencial",
    category: "Laravel",
    isPremium: true,
    rating: 4,
    duration: "10 sem",
    students: 420,
    startDate: "25 Ago 2024",
    instructor: "Ana Martinez",
    price: "S/ 399",
    modules: [
      { id: 1, title: "Carrito de compras", duration: "4h", type: "video" },
      { id: 2, title: "Pagos online", duration: "3h", type: "video" },
      { id: 3, title: "Panel admin", duration: "5h", type: "video" },
    ],
  },
  // React.js Courses (existing)
  {
    id: 4,
    title: "React.js Básico",
    image: "/image/l1.jpg",
    type: "virtual",
    category: "React.js",
    isPremium: false,
    rating: 5,
    duration: "8 sem",
    students: 1800,
    instructor: "Luis Garcia",
    price: "S/ 179",
    modules: [
      { id: 1, title: "Componentes y JSX", duration: "3h", type: "video" },
      { id: 2, title: "Props y estado", duration: "4h", type: "video" },
      { id: 3, title: "Eventos", duration: "2h", type: "video" },
    ],
  },
  {
    id: 5,
    title: "React.js Hooks",
    image: "/image/l1.jpg"    ,
    type: "virtual",
    category: "React.js",
    isPremium: false,
    rating: 5,
    duration: "10 sem",
    students: 1400,
    instructor: "Sofia Chen",
    price: "S/ 229",
    modules: [
      { id: 1, title: "useState y useEffect", duration: "4h", type: "video" },
      { id: 2, title: "Custom hooks", duration: "3h", type: "video" },
      { id: 3, title: "Context API", duration: "3h", type: "video" },
    ],
  },
  {
    id: 6,
    title: "React.js Full Stack",
    image: "/image/l1.jpg"    ,
    type: "moodle",
    category: "React.js",
    isPremium: true,
    rating: 5,
    duration: "14 sem",
    students: 950,
    instructor: "Diego Morales",
    price: "S/ 349",
    modules: [
      { id: 1, title: "Next.js framework", duration: "5h", type: "video" },
      { id: 2, title: "API integration", duration: "4h", type: "video" },
      { id: 3, title: "Deployment", duration: "3h", type: "video" },
    ],
  },
  // Docker Courses (existing)
  {
    id: 7,
    title: "Docker Básico",
    image: "/image/d1.jpg",
    type: "virtual",
    category: "Docker",
    isPremium: false,
    rating: 4,
    duration: "6 sem",
    students: 720,
    instructor: "Pedro Vargas",
    price: "S/ 199",
    modules: [
      { id: 1, title: "Introducción a Docker", duration: "2h", type: "video" },
      { id: 2, title: "Contenedores", duration: "3h", type: "video" },
      { id: 3, title: "Imágenes", duration: "3h", type: "video" },
    ],
  },
  {
    id: 8,
    title: "Docker Compose",
    image: "/image/d1.jpg",
    type: "virtual",
    category: "Docker",
    isPremium: true,
    rating: 5,
    duration: "8 sem",
    students: 580,
    instructor: "Roberto Silva",
    price: "S/ 279",
    modules: [
      { id: 1, title: "Multi-container apps", duration: "4h", type: "video" },
      { id: 2, title: "Volumes y networks", duration: "3h", type: "video" },
      { id: 3, title: "Production setup", duration: "4h", type: "video" },
    ],
  },
  {
    id: 9,
    title: "Docker Kubernetes",
    image: "/image/d1.jpg",
    type: "presencial",
    category: "Docker",
    isPremium: true,
    rating: 5,
    duration: "12 sem",
    students: 320,
    instructor: "Miguel Torres",
    price: "S/ 449",
    modules: [
      { id: 1, title: "Kubernetes basics", duration: "4h", type: "video" },
      { id: 2, title: "Pods y services", duration: "5h", type: "video" },
      { id: 3, title: "Deployments", duration: "4h", type: "video" },
    ],
  },
  // MikroTik Courses (existing)
  {
    id: 10,
    title: "MikroTik Básico",
    image: "/image/m1.jpg",
    type: "presencial",
    category: "MikroTik",
    isPremium: false,
    rating: 4,
    duration: "6 sem",
    students: 450,
    instructor: "Fernando Lopez",
    price: "S/ 249",
    modules: [
      { id: 1, title: "Configuración inicial", duration: "3h", type: "video" },
      { id: 2, title: "Routing básico", duration: "4h", type: "video" },
      { id: 3, title: "Firewall", duration: "3h", type: "video" },
    ],
  },
  {
    id: 11,
    title: "MikroTik Avanzado",
    image: "/image/m1.jpg",
    type: "presencial",
    category: "MikroTik",
    isPremium: true,
    rating: 5,
    duration: "10 sem",
    students: 280,
    instructor: "Carmen Ruiz",
    price: "S/ 399",
    modules: [
      { id: 1, title: "OSPF y BGP", duration: "5h", type: "video" },
      { id: 2, title: "VPN tunnels", duration: "4h", type: "video" },
      { id: 3, title: "QoS avanzado", duration: "4h", type: "video" },
    ],
  },
  {
    id: 12,
    title: "MikroTik Wireless",
    image: "/image/m1.jpg",
    type: "moodle",
    category: "MikroTik",
    isPremium: true,
    rating: 5,
    duration: "8 sem",
    students: 350,
    instructor: "Alberto Jimenez",
    price: "S/ 329",
    modules: [
      { id: 1, title: "Configuración wireless", duration: "4h", type: "video" },
      { id: 2, title: "Hotspot management", duration: "3h", type: "video" },
      { id: 3, title: "User manager", duration: "3h", type: "video" },
    ],
  },
  // PostgreSQL Courses (existing)
  {
    id: 13,
    title: "PostgreSQL Básico",
    image: "/image/p1.jpg",
    type: "virtual",
    category: "PostgreSQL",
    isPremium: false,
    rating: 4,
    duration: "6 sem",
    students: 820,
    instructor: "Raul Herrera",
    price: "S/ 159",
    modules: [
      { id: 1, title: "SQL básico", duration: "3h", type: "video" },
      { id: 2, title: "Tablas y relaciones", duration: "4h", type: "video" },
      { id: 3, title: "Consultas", duration: "3h", type: "video" },
    ],
  },
  {
    id: 14,
    title: "PostgreSQL Avanzado",
    image: "/image/p1.jpg",
    type: "virtual",
    category: "PostgreSQL",
    isPremium: true,
    rating: 5,
    duration: "8 sem",
    students: 540,
    instructor: "Patricia Morales",
    price: "S/ 249",
    modules: [
      { id: 1, title: "Consultas complejas", duration: "4h", type: "video" },
      { id: 2, title: "Stored procedures", duration: "3h", type: "video" },
      { id: 3, title: "Optimización", duration: "4h", type: "video" },
    ],
  },
  {
    id: 15,
    title: "PostgreSQL DBA",
    image: "/p1.jpg",
    type: "presencial",
    category: "PostgreSQL",
    isPremium: true,
    rating: 5,
    duration: "10 sem",
    students: 290,
    instructor: "Claudia Vargas",
    price: "S/ 379",
    modules: [
      { id: 1, title: "Administración", duration: "4h", type: "video" },
      { id: 2, title: "Backup y recovery", duration: "3h", type: "video" },
      { id: 3, title: "Performance tuning", duration: "5h", type: "video" },
    ],
  },
  // New Categories
  {
    id: 16,
    title: "Administración de Servidores Linux",
    image: "/image/s1.jpg",
    type: "virtual",
    category: "Servidores",
    isPremium: false,
    rating: 4,
    duration: "8 sem",
    students: 600,
    startDate: "01 Sep 2024",
    instructor: "Ricardo Perez",
    price: "S/ 220",
    modules: [
      {
        id: 1,
        title: "Instalación y Configuración",
        duration: "3h",
        type: "video",
      },
      {
        id: 2,
        title: "Gestión de Usuarios y Permisos",
        duration: "4h",
        type: "video",
      },
      { id: 3, title: "Servicios de Red", duration: "3h", type: "video" },
    ],
  },
  {
    id: 17,
    title: "Seguridad en Servidores",
    image: "/image/s1.jpg",
    type: "presencial",
    category: "Servidores",
    isPremium: true,
    rating: 5,
    duration: "10 sem",
    students: 350,
    startDate: "10 Sep 2024",
    instructor: "Laura Gomez",
    price: "S/ 380",
    modules: [
      { id: 1, title: "Hardening de Sistemas", duration: "4h", type: "video" },
      { id: 2, title: "Firewalls y IDS/IPS", duration: "5h", type: "video" },
      { id: 3, title: "Auditoría y Monitoreo", duration: "4h", type: "video" },
    ],
  },
  {
    id: 18,
    title: "IA para Análisis de Datos Científicos",
    image: "/placeholder.svg?height=300&width=400&text=IA+Análisis+Científico",
    type: "virtual",
    category: "Herramientas de IA aplicadas a la investigación científica",
    isPremium: true,
    rating: 5,
    duration: "12 sem",
    students: 400,
    startDate: "05 Oct 2024",
    instructor: "Dr. Javier Soto",
    price: "S/ 450",
    modules: [
      {
        id: 1,
        title: "Fundamentos de ML para Ciencia",
        duration: "4h",
        type: "video",
      },
      {
        id: 2,
        title: "Procesamiento de Lenguaje Natural",
        duration: "5h",
        type: "video",
      },
      {
        id: 3,
        title: "Visión por Computadora en Investigación",
        duration: "4h",
        type: "video",
      },
    ],
  },
  {
    id: 19,
    title: "Desarrollo Web con PHP y MySQL",
    image: "/placeholder.svg?height=300&width=400&text=PHP+MySQL",
    type: "virtual",
    category: "PHP - MariaDB MySQL",
    isPremium: false,
    rating: 4,
    duration: "9 sem",
    students: 700,
    startDate: "15 Sep 2024",
    instructor: "Elena Castro",
    price: "S/ 210",
    modules: [
      { id: 1, title: "Introducción a PHP", duration: "3h", type: "video" },
      {
        id: 2,
        title: "Bases de Datos con MySQL",
        duration: "4h",
        type: "video",
      },
      { id: 3, title: "CRUD con PHP", duration: "3h", type: "video" },
    ],
  },
  {
    id: 20,
    title: "Optimización de Bases de Datos MariaDB",
    image: "/placeholder.svg?height=300&width=400&text=MariaDB+Optimización",
    type: "virtual",
    category: "PHP - MariaDB MySQL",
    isPremium: true,
    rating: 5,
    duration: "7 sem",
    students: 300,
    startDate: "20 Sep 2024",
    instructor: "Roberto Diaz",
    price: "S/ 280",
    modules: [
      { id: 1, title: "Índices y Vistas", duration: "3h", type: "video" },
      {
        id: 2,
        title: "Stored Procedures y Triggers",
        duration: "4h",
        type: "video",
      },
      { id: 3, title: "Replicación y Backup", duration: "3h", type: "video" },
    ],
  },
  {
    id: 21,
    title: "Python para Ciencia de Datos",
    image: "/placeholder.svg?height=300&width=400&text=Python+Ciencia+Datos",
    type: "virtual",
    category: "Python",
    isPremium: false,
    rating: 5,
    duration: "10 sem",
    students: 1500,
    startDate: "01 Oct 2024",
    instructor: "Andrea Rojas",
    price: "S/ 250",
    modules: [
      { id: 1, title: "Numpy y Pandas", duration: "4h", type: "video" },
      {
        id: 2,
        title: "Visualización con Matplotlib",
        duration: "3h",
        type: "video",
      },
      {
        id: 3,
        title: "Introducción a Scikit-learn",
        duration: "4h",
        type: "video",
      },
    ],
  },
  {
    id: 22,
    title: "Automatización con Python",
    image: "/placeholder.svg?height=300&width=400&text=Python+Automatización",
    type: "virtual",
    category: "Python",
    isPremium: true,
    rating: 4,
    duration: "8 sem",
    students: 650,
    startDate: "08 Oct 2024",
    instructor: "Juan Pablo",
    price: "S/ 320",
    modules: [
      {
        id: 1,
        title: "Automatización de Tareas",
        duration: "3h",
        type: "video",
      },
      { id: 2, title: "Web Scraping", duration: "4h", type: "video" },
      {
        id: 3,
        title: "Automatización de Redes",
        duration: "3h",
        type: "video",
      },
    ],
  },
  {
    id: 23,
    title: "Control de Versiones con Git y GitHub",
    image: "/placeholder.svg?height=300&width=400&text=Git+GitHub",
    type: "virtual",
    category: "Git",
    isPremium: false,
    rating: 5,
    duration: "5 sem",
    students: 900,
    startDate: "20 Ago 2024",
    instructor: "Daniela Vega",
    price: "S/ 150",
    modules: [
      { id: 1, title: "Fundamentos de Git", duration: "2h", type: "video" },
      {
        id: 2,
        title: "Trabajo Colaborativo con GitHub",
        duration: "3h",
        type: "video",
      },
      {
        id: 3,
        title: "Resolución de Conflictos",
        duration: "2h",
        type: "video",
      },
    ],
  },
  {
    id: 24,
    title: "Estadística Descriptiva con R",
    image: "/placeholder.svg?height=300&width=400&text=Estadística+R",
    type: "virtual",
    category: "Estadística Descriptiva",
    isPremium: false,
    rating: 4,
    duration: "7 sem",
    students: 480,
    startDate: "01 Sep 2024",
    instructor: "Prof. Sofia Luna",
    price: "S/ 180",
    modules: [
      {
        id: 1,
        title: "Medidas de Tendencia Central",
        duration: "3h",
        type: "video",
      },
      { id: 2, title: "Medidas de Dispersión", duration: "3h", type: "video" },
      { id: 3, title: "Gráficos Estadísticos", duration: "2h", type: "video" },
    ],
  },
  {
    id: 25,
    title: "Desarrollo de Apps Android con Kotlin",
    image: "/placeholder.svg?height=300&width=400&text=Android+Kotlin",
    type: "virtual",
    category: "Android, Kotlin",
    isPremium: true,
    rating: 5,
    duration: "14 sem",
    students: 750,
    startDate: "10 Sep 2024",
    instructor: "Gabriel Soto",
    price: "S/ 420",
    modules: [
      { id: 1, title: "Introducción a Kotlin", duration: "4h", type: "video" },
      { id: 2, title: "Componentes de Android", duration: "5h", type: "video" },
      { id: 3, title: "Persistencia de Datos", duration: "4h", type: "video" },
    ],
  },
  {
    id: 26,
    title: "Creación de Sitios Web con WordPress",
    image: "/placeholder.svg?height=300&width=400&text=WordPress+Básico",
    type: "virtual",
    category: "WordPress",
    isPremium: false,
    rating: 4,
    duration: "6 sem",
    students: 1100,
    startDate: "05 Ago 2024",
    instructor: "Carolina Paz",
    price: "S/ 160",
    modules: [
      {
        id: 1,
        title: "Instalación y Configuración",
        duration: "2h",
        type: "video",
      },
      { id: 2, title: "Temas y Plugins", duration: "3h", type: "video" },
      { id: 3, title: "Creación de Contenido", duration: "2h", type: "video" },
    ],
  },
  {
    id: 27,
    title: "React y TypeScript Fundamentos",
    image: "/placeholder.svg?height=300&width=400&text=React+TypeScript",
    type: "virtual",
    category: "React c/TypeScript",
    isPremium: true,
    rating: 5,
    duration: "10 sem",
    students: 800,
    startDate: "01 Sep 2024",
    instructor: "Martín Torres",
    price: "S/ 300",
    modules: [
      { id: 1, title: "TypeScript para React", duration: "4h", type: "video" },
      { id: 2, title: "Componentes Tipados", duration: "3h", type: "video" },
      { id: 3, title: "Hooks con TypeScript", duration: "3h", type: "video" },
    ],
  },
  {
    id: 28,
    title: "Introducción a Power BI",
    image: "/placeholder.svg?height=300&width=400&text=PowerBI+Intro",
    type: "virtual",
    category: "Power BI",
    isPremium: false,
    rating: 4,
    duration: "6 sem",
    students: 550,
    startDate: "15 Ago 2024",
    instructor: "Valeria Soto",
    price: "S/ 190",
    modules: [
      { id: 1, title: "Conexión de Datos", duration: "2h", type: "video" },
      {
        id: 2,
        title: "Creación de Visualizaciones",
        duration: "3h",
        type: "video",
      },
      {
        id: 3,
        title: "Publicación de Informes",
        duration: "2h",
        type: "video",
      },
    ],
  },
  {
    id: 29,
    title: "IA para Creación de Contenido Educativo",
    image: "/placeholder.svg?height=300&width=400&text=IA+Docentes",
    type: "virtual",
    category: "Herramientas de IA aplicadas para docentes",
    isPremium: true,
    rating: 5,
    duration: "8 sem",
    students: 300,
    startDate: "01 Oct 2024",
    instructor: "Prof. Ana Maria",
    price: "S/ 350",
    modules: [
      {
        id: 1,
        title: "Generación de Textos con IA",
        duration: "3h",
        type: "video",
      },
      {
        id: 2,
        title: "Creación de Presentaciones",
        duration: "4h",
        type: "video",
      },
      {
        id: 3,
        title: "Herramientas de Evaluación",
        duration: "3h",
        type: "video",
      },
    ],
  },
];

// Get unique categories
const categories = [
  "Todos",
  ...Array.from(new Set(courses.map((course) => course.category))),
];

export default function SectionTwo() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = courses.filter((course) =>
    activeCategory === "Todos" ? true : course.category === activeCategory
  );

  const renderStars = (rating: number | undefined) => {
    if (rating === undefined) return null;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${styles.star} ${
          i < rating ? styles.starFilled : styles.starEmpty
        }`}
      />
    ));
  };

  const getModuleIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play size={16} />;
      case "document":
        return <FileText size={16} />;
      case "quiz":
        return <BookOpen size={16} />;
      default:
        return <Play size={16} />;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Tenemos Cursos de Tecnología</h2>
        </div>
        {/* Simple Category Navigation - NOW A CAROUSEL */}
        <div className={styles.categoryNav}>
          {categories.map((category) => (
            <span
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.categoryItem} ${
                activeCategory === category ? styles.active : ""
              }`}
            >
              {category}
            </span>
          ))}
        </div>
        {/* Course Carousel */}
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className={styles.carouselItem}
                onClick={() => setSelectedCourse(course)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={200}
                    className={styles.courseImage}
                  />
                  {course.isPremium && (
                    <div className={styles.premiumBadge}>
                      <Crown size={16} />
                      <span>Premium</span>
                    </div>
                  )}
                  {course.rating !== undefined && (
                    <div className={styles.ratingContainer}>
                      {renderStars(course.rating)}
                    </div>
                  )}
                  <div
                    className={`${styles.typeBadge} ${
                      course.type === "virtual"
                        ? styles.typeVirtual
                        : course.type === "moodle"
                        ? styles.typeMoodle
                        : styles.typePresencial
                    }`}
                  >
                    {course.type === "virtual" && "Virtual"}
                    {course.type === "moodle" && "Moodle"}
                    {course.type === "presencial" && "Presencial"}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseMeta}>
                    {course.instructor && (
                      <div className={styles.instructorInfo}>
                        <div className={styles.instructorAvatar}>
                          <span className={styles.instructorInitials}>
                            {course.instructor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span>{course.instructor}</span>
                      </div>
                    )}
                    <div className={styles.courseStats}>
                      {course.duration && (
                        <div className={styles.statItem}>
                          <Clock size={16} />
                          <span>{course.duration}</span>
                        </div>
                      )}
                      {course.students && (
                        <div className={styles.statItem}>
                          <Users size={16} />
                          <span>{course.students} estudiantes</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    {course.price && (
                      <span className={styles.coursePrice}>{course.price}</span>
                    )}
                    <button
                      className={`${styles.enrollButton} ${
                        course.isPremium ? styles.premium : styles.regular
                      }`}
                    >
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Empty state */}
        {filteredCourses.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIconContainer}>
              <BookOpen size={48} />
            </div>
            <h3 className={styles.emptyTitle}>No hay cursos disponibles</h3>
            <p className={styles.emptyDescription}>
              No se encontraron cursos en esta categoría.
            </p>
          </div>
        )}
      </div>
      {/* Course Modal */}
      {selectedCourse && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedCourse.title}</h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className={styles.closeButton}
              >
                <X size={20} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.courseImageModal}>
                <Image
                  src={selectedCourse.image || "/placeholder.svg"}
                  alt={selectedCourse.title}
                  width={700}
                  height={350}
                  className="object-cover rounded-lg w-full"
                />
              </div>
              <div className={styles.courseDetailsModal}>
                {selectedCourse.duration && (
                  <div className={styles.detailItem}>
                    <Clock size={16} />
                    <span>Duración: {selectedCourse.duration}</span>
                  </div>
                )}
                {selectedCourse.students && (
                  <div className={styles.detailItem}>
                    <Users size={16} />
                    <span>{selectedCourse.students} estudiantes</span>
                  </div>
                )}
                {selectedCourse.instructor && (
                  <div className={styles.detailItem}>
                    <BookOpen size={16} />
                    <span>Instructor: {selectedCourse.instructor}</span>
                  </div>
                )}
                {selectedCourse.startDate && (
                  <div className={styles.detailItem}>
                    <Zap size={16} />
                    <span>Inicio: {selectedCourse.startDate}</span>
                  </div>
                )}
              </div>
              {selectedCourse.description && (
                <div className={styles.modulesSection}>
                  <h4 className={styles.modulesTitle}>Descripción del Curso</h4>
                  <p>{selectedCourse.description}</p>
                </div>
              )}
              {selectedCourse.modules && selectedCourse.modules.length > 0 && (
                <div className={styles.modulesSection}>
                  <h4 className={styles.modulesTitle}>Módulos del Curso</h4>
                  <div className={styles.modulesList}>
                    {selectedCourse.modules.map((module) => (
                      <div key={module.id} className={styles.moduleItem}>
                        <div className={styles.moduleIcon}>
                          {getModuleIcon(module.type)}
                        </div>
                        <div className={styles.moduleInfo}>
                          <span className={styles.moduleTitle}>
                            {module.title}
                          </span>
                          <span className={styles.moduleDuration}>
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.modalActions}>
                <button
                  className={`${styles.enrollButtonModal} ${
                    selectedCourse.isPremium ? styles.premium : styles.regular
                  }`}
                >
                  Inscribirse - {selectedCourse.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
