import { BrowserRouter, Routes, Route } from "react-router-dom";

import login from "./pages/login/enterance";
import dashboard from "./pages/dashboard/authenticate";

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