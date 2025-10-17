import HeroSection from "./components/herosection/HeroSection";
import Profile from "./components/profile/Profile";
import Expertise from "./components/expertise/Expertise";
import ProjectsPreview from "./components/projectspreview/ProjectsPreview";
import Planet from "./components/planet/Planet";
import Approach from "./components/approach/Approach";
import Navbar from "./components/navbar/Navbar";
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
import Nexio from "./components/nexio/Nexio";
import Stania from "./components/stania/Stania";
import Portfolio from "./components/portfolio/Portfolio";

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
                    <HeroSection />
                    <Profile />
                    <Expertise />
                    <ProjectsPreview />
                    <div className="dark_background">
                      <>
                        <Approach />
                        <Planet />
                        <Collaborate />
                      </>
                    </div>
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
              <Route path="projects/portfolio" element={<Portfolio />} />
              <Route path="/projects/nexio" element={<Nexio />} />
              <Route path="projects/stania" element={<Stania />} />
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
