import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Technologies from "./components/technologies/Technologies";
import Approach from "./components/approach/Approach";
import Collaborate from "./components/collaborate/Collaborate";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Lamp from "./components/lamp/Lamp";
import Multifunctional from "./components/multifunctional/Multifunctional";
import DueMarkBlog from "./components/duemarkblog/DuemarkBlog";
import DueMark from "./components/duemark/Duemark";

function App() {
  return (
    <>
      <div className="app_container">
        <Router>
          <Navbar />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Services />
                    <Technologies />
                    <Approach />
                    <Collaborate />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/smart-lamp" element={<Lamp />} />
              <Route
                path="/projects/multifunctional-storage"
                element={<Multifunctional />}
              />
              <Route path="/projects/duemarkblog" element={<DueMarkBlog />} />
              <Route path="/projects/duemark" element={<DueMark />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
