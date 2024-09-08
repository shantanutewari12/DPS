import DPSPage from "./componenets/DpsPage";
import './App.css';
import Welcome from "./componenets/Welcome/Welcome";
import AboutUs from "./componenets/Aboutus/aboutUs";
import Testimonials from "./componenets/testimonials/testimonials";
import Footer from "./componenets/Footer/footer";

function App() {
  return (
    <div className="App">
      <h2>
      <DPSPage/>
      <Welcome/>
      <AboutUs/>
      <Testimonials />
      <Footer/>
      </h2>
    </div>
  );
}
export default App;