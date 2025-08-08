"use client";

export default function MikrotikPage() {
  return (
    <section
      id="section-three"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: 'url("/image/op1.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "scroll",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "visible",
        // marginTop: "0.8cm",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          transform: "translate(2cm, 2cm)",
        }}
        className="hero-buttons"
      >
        <a
          href="https://chat.whatsapp.com/BvgwYz1LHhe7kcg8LGNdx9?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "16px 28px",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.4s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            justifyContent: "center",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            width: "250px",
            color: "#fff",
            background: "linear-gradient(135deg, #ff5c34 0%, #f29f05 100%)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #f29f05 0%, #ff5c34 100%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #ff5c34 0%, #f29f05 100%)")
          }
        >
          <i className="fab fa-whatsapp" style={{ fontSize: 16 }}></i>
          Únete a Nosotros
        </a>
        <a
          href="/pdfservidores.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "16px 28px",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.4s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            justifyContent: "center",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            width: "250px",
            color: "#fff",
            background: "linear-gradient(135deg, #ff5c34 0%, #f29f05 100%)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #f29f05 0%, #ff5c34 100%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #ff5c34 0%, #f29f05 100%)")
          }
        >
          <i className="fas fa-file-alt" style={{ fontSize: 16 }}></i>
          Ver contenido del Curso
        </a>
      </div>

      {/* Imagen destacada (opcional)
      <img
        src="/j1.png"
        alt="Decorativa"
        style={{
          position: "absolute",
          bottom: "-160px",
          left: "12%",
          transform: "translateX(-48%)",
          width: "720px",
          zIndex: 1,
          pointerEvents: "none",
          display: "none", // Ocultamos por ahora para simular mobile
        }}
      /> */}
      <style jsx>{`
        @media (max-width: 768px) {
          section#section-three {
            margin-top: 0;
            height: auto;
            aspect-ratio: 9 / 16;
            background-image: url("/FG1.jpg");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: scroll;
          }

          .hero-buttons {
            transform: none;
            margin: 10cm auto 0 auto;
            gap: 20px;
            width: 100%;
            align-items: center;
            justify-content: center;
          }

          a {
            width: 80% !important;
            font-size: 16px !important;
            padding: 14px 24px !important;
            margin: 0 auto;
          }

          img {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
