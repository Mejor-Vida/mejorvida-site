export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Seguros para una Mejor Vida
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#555", textAlign: "center", maxWidth: "600px" }}>
        Protege a tu familia con planes accesibles y confiables.  
        Sitio oficial de Mejor Vida Insurance LLC.
      </p>
    </main>
  );
}
