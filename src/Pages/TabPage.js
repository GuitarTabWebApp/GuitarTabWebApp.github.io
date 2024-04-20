import "./TabPage.css";

function TabPage() {
  return (
    <div
      className="TabPage"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        width: "70vw",
      }}
    >
      <h1 style={{ padding: "1rem", margin: "1rem", marginBottom: "20%" }}>
        Welcome to <br /> GuitarTabStorageApp Tab Page
      </h1>
    </div>
  );
}

export default TabPage;
