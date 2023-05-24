import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="conatiner my-3">
          <TextForm heading="Enter text to analyze below" />
        </div>
      </div>
    </>
  );
}

export default App;
