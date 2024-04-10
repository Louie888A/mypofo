import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import ProjectsGallery from "./pages/Projectsgallery";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/projectsgallery" element={<ProjectsGallery />} />
        <Route path="/projects/:projectId" element={<ProjectDisplay />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
