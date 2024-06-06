import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import AdminLayout from "./pages/admin/AdminLayout";
import Incidents from "./pages/admin/Incidents";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Navbar */}
        <Routes>
          {/* page routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="incidents" element={<Incidents />} />
          </Route>
        </Routes>
        {/* Footer */}
      </Router>
    </div>
  );
}

export default App;
