"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Crown, Clock, Users, BookOpen, Calendar } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description?: string;
  image: string;
  type: "virtual" | "moodle" | "presencial";
  category: "todos" | "proximos" | "destacados" | "premium";
  isPremium: boolean;
  rating?: number;
  duration?: string;
  students?: number;
  startDate?: string;
  instructor?: string;
  price?: string;
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
    price: "S/ 299"
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
    price: "S/ 199"
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
    price: "S/ 149"
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
    price: "Gratuito"
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
    price: "S/ 399"
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
    price: "S/ 179"
  }
];

const tabs = [
  { id: "todos", label: "Todos los cursos", icon: BookOpen },
  { id: "proximos", label: "Próximos cursos", icon: Calendar },
  { id: "destacados", label: "Cursos destacados", icon: Star },
  { id: "premium", label: "Cursos premium", icon: Crown },
];

export default function SectionFour() {
  const [activeTab, setActiveTab] = useState<string>("todos");

  const filteredCourses = courses.filter((course) =>
    activeTab === "todos" ? true : course.category === activeTab
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <style jsx>{`
        .section {
          padding: 4rem 0;
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
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
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
          border-radius: 0.75rem;
          padding: 0.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          max-width: 64rem;
          margin: 0 auto;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          flex: 1;
          justify-content: center;
          min-width: 0;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
          transform: translateY(-1px);
        }

        .tab-button:not(.active) {
          color: #6b7280;
          background: transparent;
        }

        .tab-button:not(.active):hover {
          color: #374151;
          background: #f3f4f6;
          transform: translateY(-1px);
        }

        .tab-icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .tab-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 112rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .course-card {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .course-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-4px);
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
          transition: opacity 0.3s ease;
        }

        .course-card:hover::before {
          opacity: 1;
        }

        .image-container {
          position: relative;
          height: 12rem;
          overflow: hidden;
        }

        .course-image {
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .course-card:hover .course-image {
          transform: scale(1.05);
        }

        .premium-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-size: 0.75rem;
          font-weight: bold;
          padding: 0.5rem 0.75rem;
          color: white;
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.3);
        }

        .premium-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        .rating-container {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          display: flex;
          gap: 0.25rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 9999px;
          padding: 0.5rem;
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
          bottom: 0.75rem;
          left: 0.75rem;
          font-size: 0.75rem;
          padding: 0.5rem;
          border-radius: 0.375rem;
          font-weight: 500;
        }

        .type-virtual {
          background: #dcfce7;
          color: #166534;
        }

        .type-moodle {
          background: #fed7aa;
          color: #9a3412;
        }

        .type-presencial {
          background: #dbeafe;
          color: #1e40af;
        }

        .card-content {
          padding: 1.5rem;
        }

        .course-title {
          font-weight: bold;
          font-size: 1.125rem;
          color: #1f2937;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .course-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .instructor-info {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .instructor-avatar {
          width: 1.5rem;
          height: 1.5rem;
          background: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.5rem;
        }

        .instructor-initials {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .course-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-icon {
          width: 1rem;
          height: 1rem;
        }

        .start-date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #3b82f6;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #f3f4f6;
        }

        .course-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
        }

        .enroll-button {
          padding: 0.5rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .enroll-button.premium {
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
          color: white;
        }

        .enroll-button.premium:hover {
          background: linear-gradient(135deg, #d97706 0%, #c2410c 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }

        .enroll-button.regular {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }

        .enroll-button.regular:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .empty-state {
          text-align: center;
          padding: 3rem 0;
        }

        .empty-icon-container {
          width: 6rem;
          height: 6rem;
          background: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .empty-icon {
          width: 3rem;
          height: 3rem;
          color: #9ca3af;
        }

        .empty-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .empty-description {
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .tab-label {
            display: none;
          }
          
          .tab-button {
            padding: 0.75rem;
          }
        }
      `}</style>

      <section className="section">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="tabs-container">
            <div className="tabs-wrapper">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    <IconComponent className="tab-icon" />
                    <span className="tab-label">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Course Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="image-container">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="course-image"
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
                    <div className="rating-container">
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
                        <span>{course.instructor}</span>
                      </div>
                    )}

                    <div className="course-stats">
                      <div className="stat-item">
                        <Clock className="stat-icon" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="stat-item">
                        <Users className="stat-icon" />
                        <span>{course.students} estudiantes</span>
                      </div>
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
                    <button className={`enroll-button ${course.isPremium ? 'premium' : 'regular'}`}>
                      {course.price === "Gratuito" ? "Acceder" : "Inscribirse"}
                    </button>
                  </div>
                </div>
              </div>
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
                No se encontraron cursos en esta categoría. Prueba con otra pestaña.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}