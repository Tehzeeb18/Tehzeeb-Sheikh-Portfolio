import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3 mb-0">
            <h5 className="text-center foot"> Made by Tehzeeb Sheikh</h5>
            <h6 className="text-center foot"><small> &copy; </small>Copyright  2025.</h6>  
            <br></br>
            <p className="text-center foot">Phone : <a href="tel:7073991252" style={{ textDecoration: 'none', color: 'inherit' }}>+917073991252</a></p>
            <p className="text-center foot">Email: <a href="mailto:tehzeebsheikh18@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>tehzeebsheikh18@gmail.com</a></p>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "black", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;