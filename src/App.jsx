import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;