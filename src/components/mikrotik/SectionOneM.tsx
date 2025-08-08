import styles from "@/styles/mikrotik/SectionOneM.module.css";
import {
  Calendar,
  Clock,
  Zap,
  Monitor,
  Users,
  Award,
  BookOpen,
  Target,
} from "lucide-react";

export default function SectionOne() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {/* Inicio de clases */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            {/* Frente */}
            <div className={styles.cardFront}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Calendar className={styles.icon} />
                </div>
                <div className={styles.glowLine}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Inicio de clases</h3>
                <p className={styles.cardValue}>28 de Julio</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>

            {/* Atrás */}
            <div className={styles.cardBack}>
              <div className={styles.backContent}>
                <div className={styles.backIcon}>
                  <Users className={styles.icon} />
                </div>
                <div className={styles.badge}>INSCRIPCIONES</div>
                <h3 className={styles.backTitle}>¡Últimos cupos!</h3>
                <p className={styles.backSubtitle}>
                  Reserva tu lugar ahora
                  <br />
                  Modalidad presencial y virtual
                </p>
                <div className={styles.backStats}>
                  <span>95% Satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Duración */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            {/* Frente */}
            <div className={styles.cardFront}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Clock className={styles.icon} />
                </div>
                <div className={styles.glowLine}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Duración</h3>
                <p className={styles.cardValue}>3 semanas</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>

            {/* Atrás */}
            <div className={styles.cardBack}>
              <div className={styles.backContent}>
                <div className={styles.backIcon}>
                  <BookOpen className={styles.icon} />
                </div>
                <div className={styles.badge}>CRONOGRAMA</div>
                <h3 className={styles.backTitle}>Horario flexible</h3>
                <p className={styles.backSubtitle}>
                  Clases de 2 horas diarias
                  <br />
                  Lunes a Viernes 7:00 PM
                </p>
                <div className={styles.backStats}>
                  <span>42 horas totales</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metodología */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            {/* Frente */}
            <div className={styles.cardFront}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Zap className={styles.icon} />
                </div>
                <div className={styles.glowLine}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.frontBadge}>HANDS-ON</div>
                <h3 className={styles.cardTitle}>80% práctico</h3>
                <p className={styles.cardValue}>20% teórico</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>

            {/* Atrás */}
            <div className={styles.cardBack}>
              <div className={styles.backContent}>
                <div className={styles.backIcon}>
                  <Target className={styles.icon} />
                </div>
                <div className={styles.badge}>METODOLOGÍA</div>
                <h3 className={styles.backTitle}>Aprendizaje práctico</h3>
                <p className={styles.backSubtitle}>
                  Laboratorios con servidores
                  <br />
                  Máquinas virtuales reales
                </p>
                <div className={styles.backStats}>
                  <span>Proyectos reales</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modalidad */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            {/* Frente */}
            <div className={styles.cardFront}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Monitor className={styles.icon} />
                </div>
                <div className={styles.glowLine}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Modalidad</h3>
                <p className={styles.cardValue}>Virtual en Vivo</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>

            {/* Atrás */}
            <div className={styles.cardBack}>
              <div className={styles.backContent}>
                <div className={styles.backIcon}>
                  <Award className={styles.icon} />
                </div>
                <div className={styles.badge}>CERTIFICACIÓN</div>
                <h3 className={styles.backTitle}>Certificado oficial</h3>
                <p className={styles.backSubtitle}>
                  Reconocimiento internacional
                  <br />
                  Válido para tu CV profesional
                </p>
                <div className={styles.backStats}>
                  <span>100% Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
