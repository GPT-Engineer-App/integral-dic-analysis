import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Upload from "./pages/Upload.jsx";
import Analyze from "./pages/Analyze.jsx";
import Identify from "./pages/Identify.jsx";
import Define from "./pages/Define.jsx";
import Calculate from "./pages/Calculate.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/analyze" element={<Analyze />} />
        <Route exact path="/identify" element={<Identify />} />
        <Route exact path="/define" element={<Define />} />
        <Route exact path="/calculate" element={<Calculate />} />
      </Routes>
    </Router>
  );
}

export default App;