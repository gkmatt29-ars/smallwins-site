import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont"
    }}>
      <div style={{ maxWidth: 720, padding: 24 }}>
        <h1 style={{ fontSize: 48, marginBottom: 16 }}>
          Small Wins
        </h1>

        <p style={{ fontSize: 20, marginBottom: 24 }}>
          Approachable AI for small businesses — starting with tools that
          improve operations and marketing through practical, real-world wins.
        </p>

        <p style={{ marginBottom: 32 }}>
          🚀 First product live:
          <br />
          <a href="https://cm.smallwins.ai" target="_blank">
            cm.smallwins.ai
          </a>
        </p>

        <p style={{ color: "#666" }}>
          More coming soon.
        </p>
      </div>
    </main>
  );
}

