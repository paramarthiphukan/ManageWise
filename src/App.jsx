import Hero from "./views/Hero";
import Frame1 from "./views/Frames/Frame1";
import Frame2 from "./views/Frames/Frame2";
import Frame3 from "./views/Frames/Frame3";
import Frame4 from "./views/Frames/Frame4";
import Frame5 from "./views/Frames/Frame5";
import Frame6 from "./views/Frames/Frame6";
import "./App.scss";
import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default App;
