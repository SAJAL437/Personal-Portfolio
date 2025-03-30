import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Resume from "./Components/Resume";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
