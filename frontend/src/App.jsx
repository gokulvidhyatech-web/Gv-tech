import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/enterance";
import Dashboard from "./pages/dashboard/authenticate";

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