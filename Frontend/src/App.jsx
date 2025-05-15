import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CreatePage } from "./pages/CreatePage";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
