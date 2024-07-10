import { useState } from "react";
import "./App.css";

import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Ru } from "./components/pages/ru/Ru";
import { Kz } from "./components/pages/kz/Kz";
import { En } from "./components/pages/en/En";

function App() {
  const [language, setLanguage] = useState("ru");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Ru />} />
        <Route path="/ru" element={<Ru />} />
        <Route path="/kz" element={<Kz />}/>
        <Route path="/en" element={<En />}/>
      </Routes>      
    </HashRouter>
  );
}

export default App;
