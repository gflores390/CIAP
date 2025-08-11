"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Crown, Clock, Users, BookOpen, Calendar } from "lucide-react"

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
    image: "/web-development-coding.png",
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
    image: "/machine-learning-python.png",
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
    image: "/ux-ui-design-figma.png",
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
    image: "/programming-basics-coding.png",
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
    image: "/data-analysis-excel.png",
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
    image: "/digital-marketing-social-media.png",
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
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <>
      <style jsx>{`
        .section {
          padding: 2rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
          position: relative;
        }

        .section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }

        .tabs-container {
          margin-bottom: 2rem;
        }

        .tabs-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;
          background: white;
          border-radius: 1rem;
          padding: 0.375rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.05);
          max-width: 100%;
          margin: 0 auto;
          backdrop-filter: blur(10px);
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.25rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex: 1;
          justify-content: center;
          min-width: 0;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .tab-button:hover::before {
          left: 100%;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 8px 25px -5px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .tab-button:not(.active) {
          color: #6b7280;
          background: transparent;
        }

        .tab-button:not(.active):hover {
          color: #374151;
          background: #f8fafc;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.1);
        }

        .tab-icon {
          width: 1.125rem;
          height: 1.125rem;
          flex-shrink: 0;
        }

        .tab-label {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 100%;
          margin: 0 auto;
        }

        .course-card {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          border-radius: 1rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .course-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .course-card:hover::before {
          opacity: 1;
        }

        .image-container {
          position: relative;
          height: 12rem;
          overflow: hidden;
          background: #f3f4f6;
        }

        .course-image {
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .course-card:hover .course-image {
          transform: scale(1.08);
        }

        .premium-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.5rem 0.875rem;
          color: white;
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          box-shadow: 0 4px 14px 0 rgba(245, 158, 11, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        .premium-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        .rating-container {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          gap: 0.25rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 9999px;
          padding: 0.5rem 0.75rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .star {
          width: 1rem;
          height: 1rem;
        }

        .star.filled {
          fill: #fbbf24;
          color: #fbbf24;
        }

        .star.empty {
          color: #d1d5db;
        }

        .type-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          font-size: 0.75rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-weight: 600;
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        .type-virtual {
          background: rgba(220, 252, 231, 0.9);
          color: #166534;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .type-moodle {
          background: rgba(254, 215, 170, 0.9);
          color: #9a3412;
          border: 1px solid rgba(251, 146, 60, 0.2);
        }

        .type-presencial {
          background: rgba(219, 234, 254, 0.9);
          color: #1e40af;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .card-content {
          padding: 1.75rem;
        }

        .course-title {
          font-weight: 700;
          font-size: 1.25rem;
          color: #1f2937;
          margin-bottom: 1rem;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 3.25rem;
        }

        .course-meta {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .instructor-info {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        .instructor-avatar {
          width: 2rem;
          height: 2rem;
          background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .instructor-initials {
          font-size: 0.75rem;
          font-weight: 600;
          color: #4b5563;
        }

        .course-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .stat-icon {
          width: 1rem;
          height: 1rem;
          color: #9ca3af;
        }

        .start-date {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.875rem;
          color: #3b82f6;
          font-weight: 600;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          width: fit-content;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid #f3f4f6;
        }

        .course-price {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1f2937;
        }

        .enroll-button {
          padding: 0.75rem 1.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .enroll-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .enroll-button:hover::before {
          left: 100%;
        }

        .enroll-button.premium {
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(245, 158, 11, 0.4);
        }

        .enroll-button.premium:hover {
          background: linear-gradient(135deg, #d97706 0%, #c2410c 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -5px rgba(245, 158, 11, 0.5);
        }

        .enroll-button.regular {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.4);
        }

        .enroll-button.regular:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -5px rgba(59, 130, 246, 0.5);
        }

        .empty-state {
          text-align: center;
          padding: 4rem 1rem;
        }

        .empty-icon-container {
          width: 8rem;
          height: 8rem;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .empty-icon {
          width: 3rem;
          height: 3rem;
          color: #9ca3af;
        }

        .empty-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #6b7280;
          margin-bottom: 0.75rem;
        }

        .empty-description {
          color: #9ca3af;
          font-size: 1rem;
          max-width: 28rem;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (min-width: 640px) {
          .section {
            padding: 3rem 0;
          }
          
          .container {
            padding: 0 1.5rem;
          }
          
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          
          .tab-button {
            padding: 1rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .section {
            padding: 4rem 0;
          }
          
          .courses-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
          
          .tabs-wrapper {
            max-width: 48rem;
          }
        }

        @media (min-width: 1280px) {
          .courses-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 1.5rem 0;
          }
          
          .container {
            padding: 0 0.75rem;
          }
          
          .tab-label {
            display: none;
          }
          
          .tab-button {
            padding: 0.75rem;
            min-width: 3rem;
          }
          
          .tab-icon {
            width: 1.25rem;
            height: 1.25rem;
          }
          
          .course-title {
            font-size: 1.125rem;
          }
          
          .card-content {
            padding: 1.25rem;
          }
          
          .course-stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .card-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }
          
          .enroll-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .tabs-wrapper {
            padding: 0.25rem;
            gap: 0.125rem;
          }
          
          .tab-button {
            padding: 0.625rem;
          }
          
          .courses-grid {
            gap: 1.5rem;
          }
          
          .image-container {
            height: 10rem;
          }
        }
      `}</style>

      <section className="section">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="tabs-container">
            <div className="tabs-wrapper">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                    aria-label={tab.label}
                  >
                    <IconComponent className="tab-icon" />
                    <span className="tab-label">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Course Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <article key={course.id} className="course-card">
                <div className="image-container">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="course-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />

                  {/* Premium badge */}
                  {course.isPremium && (
                    <div className="premium-badge">
                      <Crown className="premium-icon" />
                      PREMIUM
                    </div>
                  )}

                  {/* Rating */}
                  {course.rating && (
                    <div className="rating-container" aria-label={`Calificación: ${course.rating} de 5 estrellas`}>
                      {renderStars(course.rating)}
                    </div>
                  )}

                  {/* Type */}
                  <div className={`type-badge type-${course.type}`}>
                    {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
                  </div>
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3 className="course-title">{course.title}</h3>

                  <div className="course-meta">
                    {course.instructor && (
                      <div className="instructor-info">
                        <div className="instructor-avatar">
                          <span className="instructor-initials">
                            {course.instructor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span>Instructor: {course.instructor}</span>
                      </div>
                    )}

                    <div className="course-stats">
                      {course.duration && (
                        <div className="stat-item">
                          <Clock className="stat-icon" />
                          <span>{course.duration}</span>
                        </div>
                      )}
                      
                    </div>

                    {course.startDate && (
                      <div className="start-date">
                        <Calendar className="stat-icon" />
                        <span>Inicia: {course.startDate}</span>
                      </div>
                    )}
                  </div>

                  <div className="card-footer">
                    <div className="course-price">{course.price}</div>
                    <button
                      className={`enroll-button ${course.isPremium ? "premium" : "regular"}`}
                      aria-label={`${course.price === "Gratuito" ? "Acceder al curso" : "Inscribirse en el curso"} ${course.title}`}
                    >
                      {course.price === "Gratuito" ? "Acceder" : "Inscribirse"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon-container">
                <BookOpen className="empty-icon" />
              </div>
              <h3 className="empty-title">No hay cursos disponibles</h3>
              <p className="empty-description">
                No se encontraron cursos en esta categoría. Prueba con otra pestaña para ver más opciones.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
