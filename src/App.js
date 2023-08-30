import "./App.css";
import Bodyone from "./components/Bodyone";
import Bodytwo from "./components/Bodytwo";
// import First from "./components/First";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <First/> */}
      <Navbar/>
      <Bodyone/>
      <Bodytwo/>
      <Howitworks/>
      <Footer/>
    </div>
  );
}

export default App;
