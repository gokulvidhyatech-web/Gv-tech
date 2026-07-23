import { BrowserRouter, Routes, Route } from "react-router-dom";

import login from "./pages/login/enterance";
import dashboard from "./pages/dashboard/authenticate";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<login />} />

        <Route path="/dashboard" element={<dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;