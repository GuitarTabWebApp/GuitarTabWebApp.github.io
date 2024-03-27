import "./HomePage.css";

function HomePage() {
  return (
    <div
      className="HomePage"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        width: "70vw",
      }}
    >
      <h1 style={{ padding: "1rem", margin: "1rem", marginBottom: "20%" }}>
        Welcome to <br /> GuitarTabStorageApp Home Page
      </h1>
    </div>
  );
}

export default HomePage;
