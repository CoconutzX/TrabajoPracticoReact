import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemContainer from "./components/ItemContainer";
import ItemCountDetail from "./components/ItemCountDetail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemContainer />} />
          <Route path="/product/:id" element={<ItemCountDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App