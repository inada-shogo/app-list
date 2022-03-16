import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Top } from "./components/pages/top/top";
import db from "./firebase";

export const App = () => {

  useEffect(() => {
  }, []);
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Top />} />
      </Routes>
    </div>
  );
}
