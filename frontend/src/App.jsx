import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./way/Login/Enterance";
import Dashboard from "./way/Dashboard/Authenticate";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;