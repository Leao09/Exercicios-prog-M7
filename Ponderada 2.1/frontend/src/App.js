// App.js
import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./home.js";
import Login from "./login.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
