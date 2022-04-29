import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Visualization from "./components/Visualization";
import Visualization1 from "./components/Visualization1";
import Visualization2 from "./components/Visualization2";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Visualization />
      <Visualization1 />
      <Visualization2 />
      <Footer />
    </>
  );
}

export default App;
