import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import AdminLayout from "./pages/admin/AdminLayout";
import Incidents from "./pages/admin/Incidents";
import Dashboard from "./pages/admin/Dashboard";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Navbar */}
        <Routes>
          {/* page routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
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
