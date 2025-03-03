import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toast, Rating } from "./components";

import Home from "./home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toast" element={<Toast />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
