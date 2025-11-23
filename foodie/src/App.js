import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Salads from "./pages/Salads";
import Meals from "./pages/Meals";
import Desserts from "./pages/Desserts";
import Soups from "./pages/Soups";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/soups" element={<Soups />} />
        <Route path="/desserts" element={<Desserts />} />
        
    
    
      </Routes>
    </Router>
  );
}

export default App;
