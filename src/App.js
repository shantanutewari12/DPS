import DPSPage from "./componenets/DpsPage";
import './App.css';
import Welcome from "./componenets/Welcome/Welcome";
import AboutUs from "./componenets/Aboutus/aboutUs";
import Testimonials from "./componenets/testimonials/testimonials";
import Footer from "./componenets/Footer/footer";
import Classroom from "./componenets/classroom/classroom";
import Discover from "./componenets/discover/discover";

function App() {
  return (
    <div className="App">
      <h2>
      <DPSPage/>
      <Welcome/>
      <AboutUs/>
      <Classroom />
      <Discover />
      <Testimonials />
      <Footer/>
      </h2>
    </div>
  );
}
export default App;