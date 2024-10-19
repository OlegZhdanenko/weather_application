export default function NotFound() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#4f4f4f",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "5rem",
    margin: 0,
  };

  const textStyle = {
    fontSize: "1.5rem",
    marginTop: "20px",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#4a90e2",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404 - Page Not Found</h1>
      <p style={textStyle}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#4a90e2";
          e.target.style.color = "#fff";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#fff";
          e.target.style.color = "#4a90e2";
        }}
        onClick={() => (window.location.href = "/")}
      >
        Go Back to Home
      </button>
    </div>
  );
}
