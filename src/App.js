import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Other from "./components/Other";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:any" element={<Other />}></Route>
          <Route path="/:any/:color/:bgColor" element={<Other />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
