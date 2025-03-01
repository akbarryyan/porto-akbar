import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import QuotesNotes from "./components/QuotesNotes";

function App() {
  return (
    <Router>
      <div>
        <div className="pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quotes" element={<QuotesNotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
