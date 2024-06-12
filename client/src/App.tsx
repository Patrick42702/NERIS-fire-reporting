import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Verifications from "./pages/admin/Verifications";
import Users from "./pages/admin/Users";
import Organizations from "./pages/admin/Organizations";

import CompanyLayout from "./pages/company/CompanyLayout";

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
            <Route path="verifications" element={<Verifications />} />
            <Route path="users" element={<Users />} />
            <Route path="organizations" element={<Organizations />} />
          </Route>
          <Route path="/company/:id" element={<CompanyLayout />} />
        </Routes>
        {/* Footer */}
      </Router>
    </div>
  );
}

export default App;
