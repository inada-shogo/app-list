import React from "react";
import { Route, Routes } from "react-router-dom";
import { Top } from "./components/pages/top/top";

export const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Top />} />
      </Routes>
    </div>
  );
}
