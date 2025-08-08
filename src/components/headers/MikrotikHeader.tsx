"use client"

import { Menu, X, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { useState, useEffect } from "react"
import styles from "@/styles/mikrotik/header-mikrotik.module.css"

const MikrotikHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Efecto para añadir/quitar la clase 'header-sticky-active' al body
  useEffect(() => {
    if (isScrolled) {
      document.body.classList.add("header-sticky-active")
    } else {
      document.body.classList.remove("header-sticky-active")
    }
  }, [isScrolled])

  return (
    <div className={styles.headerWrapper}>
      {/* Barra superior que desaparece con scroll */}
      <div className={`${styles.topBar} ${isScrolled ? styles.topBarHidden : ""}`}>
        <div className={styles.topBarContainer}>
          <div className={styles.socialSection}>
            <span className={styles.socialText}>Síguenos en:</span>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <Youtube className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header principal que se vuelve sticky */}
      <header className={`${styles.headerHome} ${isScrolled ? styles.headerSticky : ""}`}>
        <div className={styles.headerHomeContainer}>
          <div className={styles.headerHomeContent}>
            {/* Logo/Title */}
            <div className={styles.headerHomeLogoContainer}>
              <div className={styles.logoWrapper}>
                <img src="/placeholder.svg?height=40&width=100" alt="Logo PSG" className={styles.logoImage} />
                <img src="/placeholder.svg?height=40&width=100" alt="Logo CIAP" className={styles.logoImage} />
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className={styles.headerHomeDesktopNav}>
              <a href="#" className={styles.headerHomeNavLink}>
                Inicio
              </a>
              <a href="#" className={styles.headerHomeNavLink}>
                Curso
              </a>
              <a href="#" className={styles.headerHomeNavLink}>
                Pagos
              </a>
              <a href="#" className={styles.headerHomeNavLink}>
                Contactanos
              </a>
            </nav>
            {/* Mobile menu button */}
            <div className={styles.headerHomeMobileMenuButton}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.headerHomeMenuButton}
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <X className={styles.headerHomeIcon} /> : <Menu className={styles.headerHomeIcon} />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={styles.headerHomeMobileNav}>
              <nav className={styles.headerHomeMobileNavContent}>
                <a href="#" className={styles.headerHomeNavLink}>
                  Inicio
                </a>
                <a href="#" className={styles.headerHomeNavLink}>
                  Curso
                </a>
                <a href="#" className={styles.headerHomeNavLink}>
                  Pagos
                </a>
                <a href="#" className={styles.headerHomeNavLink}>
                  Contactanos
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default MikrotikHeader
