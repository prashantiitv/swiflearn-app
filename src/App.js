import "./App.css";
import AppCarousal from "./components/AppCarousal.jsx";
import NavBar from "./components/NavBar.jsx";
import Selector from "./components/Selector.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <div style={{ marginTop: 100 }}>
          <h2>Concept Videos</h2>
          <h6>Select a number</h6>
        </div>
        <AppCarousal />
        <div style={{ marginTop: 50 }}>
          <h2>Live Classes</h2>
          <h6>Select a number</h6>
        </div>
        <div
          style={{
            borderStyle: "groove",
            borderRadius: "15px",
            marginTop: 50,
            marginBottom: 100,
            padding: 15,
          }}
        >
          <Selector />
        </div>
      </div>
    </div>
  );
}

export default App;
