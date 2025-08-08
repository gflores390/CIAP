"use client";

export default function () {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-three" id="section-three">
      <div className="hero-buttons left-align">
        <a
          href="https://chat.whatsapp.com/BvgwYz1LHhe7kcg8LGNdx9?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inscribe"
        >
          <i className="fab fa-whatsapp"></i>
          Únete a Nosotros
        </a>
        <a
          href="/pdfservidores.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-content"
        >
          <i className="fas fa-file-alt"></i>
          Ver contenido del Curso
        </a>
      </div>

      <style jsx>{`
        .section-three {
          height: 100vh;
          width: 100%;
          background-image: url("/image/45.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: scroll;
          background-color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: visible;
          z-index: 10;
        }

        .hero-buttons.left-align {
          display: flex;
          flex-direction: column;
          gap: 15px;
          justify-content: center;
          align-items: center;
          margin: 0;
          transform: translate(2cm, 2cm);
        }

        .btn-inscribe,
        .btn-content {
          padding: 16px 28px;
          border: none;
          border-radius: 30px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          width: 250px;
          flex: 0 0 auto;
        }

        .btn-inscribe {
          background: linear-gradient(135deg, #ff5c34 0%, #f29f05 100%);
          color: #fff;
        }

        .btn-inscribe:hover {
          background: linear-gradient(135deg, #f29f05 0%, #ff5c34 100%);
          color: #fff;
        }

        .btn-content {
          background: linear-gradient(135deg, #ff5c34 0%, #f29f05 100%);
          color: #fff;
        }

        .btn-content:hover {
          background: linear-gradient(135deg, #f29f05 0%, #ff5c34 100%);
          color: #fff;
        }

        .btn-inscribe i,
        .btn-content i {
          font-size: 16px;
        }

        /* ✅ ✅ MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .section-three {
            background-size: contain;
            background-position: center center;
            margin-top: 1cm;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
          }

          .hero-buttons.left-align {
            transform: none; /* ✅ QUITA el desplazamiento en mobile */
            margin: 0 auto;
            gap: 20px;
            width: 100%;
            align-items: center;
            justify-content: center;
          }

          .btn-inscribe,
          .btn-content {
            width: 80%;
            font-size: 16px;
            padding: 14px 24px;
            margin: 0 auto;
          }
        }

        .imagen-sobresaliente {
          position: absolute;
          bottom: -160px; /* ⬅️ Se sale hacia section-four */
          left: 12%;
          transform: translateX(-48%);
          width: 720px;
          z-index: 1;
          pointer-events: none;
        }

        /* Oculta en móvil */
        @media (max-width: 768px) {
          .imagen-sobresaliente {
            display: none;
          }
          @media (max-width: 768px) {
            .section-three {
              margin-top: 0;
              height: auto; /* ✅ ya no ocupa 100vh */
              aspect-ratio: 9 / 16;
              background-image: url("/FG1.jpg"); /* nuevo fondo solo para celular */
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
              background-attachment: scroll;
            }

            .hero-buttons.left-align {
              transform: none;
              margin: 10cm auto 0 auto; /* ⬅️ 4cm hacia abajo solo en celular */
              gap: 20px;
              width: 100%;
              align-items: center;
              justify-content: center;
            }

            .btn-inscribe,
            .btn-content {
              width: 80%;
              font-size: 16px;
              padding: 14px 24px;
              margin: 0 auto;
            }

            .imagen-sobresaliente {
              display: none;
            }
          }
        }
      `}</style>
    </section>
  );
}
