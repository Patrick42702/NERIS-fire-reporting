import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Verifications from "./pages/admin/Verifications";
import Users from "./pages/admin/Users";
import Organizations from "./pages/admin/Organizations";

import CompanyLayout from "./pages/company/CompanyLayout";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import Incidents from "./pages/company/Incidents";
import Leaderboard from "./pages/company/Leaderboard";
import Pricing from "./pages/landing/Pricing";
import Activity from "./pages/company/Activity";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Routes>
        {/* page routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="verifications" element={<Verifications />} />
          <Route path="users" element={<Users />} />
          <Route path="organizations" element={<Organizations />} />
        </Route>
        <Route path="/company/:id" element={<CompanyLayout />}>
          <Route index element={<CompanyDashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="incidents" element={<Incidents />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
      {/* TODO: Footer */}
    </div>
  );
}

export default App;
