import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Resume from "./Components/Resume";
import ProjectDetials from "./Components/Project/ProjectDetials";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:projectname" element={<ProjectDetials />} />
      </Routes>
    </Router>
  );
}
