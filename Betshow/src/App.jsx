import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Team from "./Components/Team/Team.jsx";
import Login from "./Components/Login/Login.jsx";
import MainPage from "./Components/Home/Home.jsx";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
