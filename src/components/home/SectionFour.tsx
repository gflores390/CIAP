"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Crown, Clock, Users, BookOpen, Calendar } from "lucide-react"
import styles from "../styles/Home/Four-home.module.css"


interface Course {
  id: number
  title: string
  description?: string
  image: string
  type: "virtual" | "moodle" | "presencial"
  category: "todos" | "proximos" | "destacados" | "premium"
  isPremium: boolean
  rating?: number
  duration?: string
  students?: number
  startDate?: string
  instructor?: string
  price?: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack con React y Node.js",
    image: "/api/placeholder/400/300",
    type: "virtual",
    category: "destacados",
    isPremium: true,
    rating: 5,
    duration: "12 semanas",
    students: 1250,
    startDate: "15 Agosto 2024",
    instructor: "Carlos Mendoza",
    price: "S/ 299",
  },
  {
    id: 2,
    title: "Machine Learning con Python para Principiantes",
    image: "/api/placeholder/400/300",
    type: "moodle",
    category: "proximos",
    isPremium: false,
    rating: 4,
    duration: "8 semanas",
    students: 980,
    startDate: "1 Septiembre 2024",
    instructor: "Ana Rodriguez",
    price: "S/ 199",
  },
  {
    id: 3,
    title: "Diseño UX/UI con Figma",
    image: "/api/placeholder/400/300",
    type: "presencial",
    category: "destacados",
    isPremium: false,
    rating: 5,
    duration: "6 semanas",
    students: 654,
    startDate: "20 Agosto 2024",
    instructor: "Maria Silva",
    price: "S/ 149",
  },
  {
    id: 4,
    title: "Introducción a la Programación",
    image: "/api/placeholder/400/300",
    type: "virtual",
    category: "todos",
    isPremium: false,
    rating: 4,
    duration: "4 semanas",
    students: 2100,
    instructor: "Luis Garcia",
    price: "Gratuito",
  },
  {
    id: 5,
    title: "Análisis de Datos con Excel Avanzado",
    image: "/api/placeholder/400/300",
    type: "moodle",
    category: "premium",
    isPremium: true,
    rating: 5,
    duration: "10 semanas",
    students: 780,
    startDate: "5 Septiembre 2024",
    instructor: "Pedro Vargas",
    price: "S/ 399",
  },
  {
    id: 6,
    title: "Marketing Digital y Redes Sociales",
    image: "/api/placeholder/400/300",
    type: "virtual",
    category: "proximos",
    isPremium: false,
    rating: 4,
    duration: "7 semanas",
    students: 1450,
    startDate: "10 Septiembre 2024",
    instructor: "Sofia Martinez",
    price: "S/ 179",
  },
]

const tabs = [
  { id: "todos", label: "Todos los cursos", icon: BookOpen },
  { id: "proximos", label: "Próximos cursos", icon: Calendar },
  { id: "destacados", label: "Cursos destacados", icon: Star },
  { id: "premium", label: "Cursos premium", icon: Crown },
]

export default function SectionFour() {
  const [activeTab, setActiveTab] = useState<string>("todos")

  const filteredCourses = courses.filter((course) => (activeTab === "todos" ? true : course.category === activeTab))

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`${styles.star} ${i < rating ? styles.starFilled : styles.starEmpty}`} />
    ))
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>Explora Nuestros Cursos</h2>
          <p className={styles.sectionSubtitle}>
            Descubre una amplia variedad de cursos diseñados para impulsar tu carrera profesional
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsWrapper}>
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
                >
                  <IconComponent className={styles.tabIcon} />
                  <span className={styles.tabLabel}>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Course Grid */}
        <div className={styles.coursesGrid}>
          {filteredCourses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={course.image || "/placeholder.svg?height=200&width=400&query=curso online"}
                  alt={course.title}
                  fill
                  className={styles.courseImage}
                />

                {/* Premium badge */}
                {course.isPremium && (
                  <div className={styles.premiumBadge}>
                    <Crown className={styles.premiumIcon} />
                    PREMIUM
                  </div>
                )}

                {/* Rating */}
                {course.rating && <div className={styles.ratingContainer}>{renderStars(course.rating)}</div>}

                {/* Type */}
                <div
                  className={`${styles.typeBadge} ${styles[`type${course.type.charAt(0).toUpperCase() + course.type.slice(1)}`]}`}
                >
                  {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
                </div>
              </div>

              {/* Content */}
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
                    <div className={styles.statItem}>
                      <Clock className={styles.statIcon} />
                      <span>{course.duration}</span>
                    </div>
                    <div className={styles.statItem}>
                      <Users className={styles.statIcon} />
                      <span>{course.students} estudiantes</span>
                    </div>
                  </div>

                  {course.startDate && (
                    <div className={styles.startDate}>
                      <Calendar className={styles.statIcon} />
                      <span>Inicia: {course.startDate}</span>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.coursePrice}>{course.price}</div>
                  <button className={`${styles.enrollButton} ${course.isPremium ? styles.premium : styles.regular}`}>
                    {course.price === "Gratuito" ? "Acceder" : "Inscribirse"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCourses.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIconContainer}>
              <BookOpen className={styles.emptyIcon} />
            </div>
            <h3 className={styles.emptyTitle}>No hay cursos disponibles</h3>
            <p className={styles.emptyDescription}>
              No se encontraron cursos en esta categoría. Prueba con otra pestaña.
            </p>
          </div>
        )}

        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Cursos Disponibles</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15K+</div>
              <div className={styles.statLabel}>Estudiantes Activos</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Satisfacción</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
