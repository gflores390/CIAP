import styles from "@/styles/Footer.module.css";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

const courses = [
  "Administración de Servidores",
  "Desarrollo Web Full Stack",
  "Ciberseguridad",
  "Cloud Computing",
];

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className={styles.socialIcon} />,
    url: "https://facebook.com/psgciap",
    color: "facebook",
  },
  {
    name: "Instagram",
    icon: <Instagram className={styles.socialIcon} />,
    url: "https://instagram.com/psgciap",
    color: "instagram",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className={styles.socialIcon} />,
    url: "https://linkedin.com/company/psgciap",
    color: "linkedin",
  },
  {
    name: "YouTube",
    icon: <Youtube className={styles.socialIcon} />,
    url: "https://youtube.com/@psgciap",
    color: "youtube",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className={styles.socialIcon} />,
    url: "https://wa.me/51906689567",
    color: "whatsapp",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Logo y Descripción */}
          <div className={styles.section}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <GraduationCap className={styles.logoIconSvg} />
              </div>
              <div className={styles.logoText}>
                <h3 className={styles.companyName}>PSG-CIAP</h3>
                <p className={styles.companyTagline}>
                  Innovación y Aprendizaje
                </p>
              </div>
            </div>
            <p className={styles.companyDescription}>
              Formamos líderes en tecnología con programas prácticos y de
              vanguardia.
            </p>
          </div>

          {/* Cursos (solo texto) */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Cursos</h4>
            <ul className={styles.coursesList}>
              {courses.map((name, index) => (
                <li key={index} className={styles.courseName}>
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span className={styles.contactValue}>El Alto, Bolivia</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span className={styles.contactValue}>+591 906 689 567</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span className={styles.contactValue}>
                  info@psg-ciap.edu.bo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pie Inferior */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p>© 2025 PSG-CIAP. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
