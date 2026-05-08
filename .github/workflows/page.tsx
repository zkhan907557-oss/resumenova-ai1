export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{fontSize:"60px",fontWeight:"bold"}}>
        ResumeNova AI
      </h1>

      <p style={{fontSize:"20px",opacity:0.8}}>
        World-Class AI Resume Builder
      </p>
    </main>
  );
}