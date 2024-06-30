import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Landing from "./pages/landing/Landing";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Organizations from "./pages/admin/Organizations";
import Users from "./pages/admin/Users";
import Verifications from "./pages/admin/Verifications";

import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Activity from "./pages/company/Activity";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import CompanyLayout from "./pages/company/CompanyLayout";
import Incidents from "./pages/company/Incidents";
import Leaderboard from "./pages/company/Leaderboard";
import Pricing from "./pages/landing/Pricing";

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
        <Route
          path="/company/:id"
          element={
            <ProtectedRoute>
              <CompanyLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <CompanyDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="activity"
            element={
              <ProtectedRoute>
                <Activity />
              </ProtectedRoute>
            }
          />
          <Route
            path="incidents"
            element={
              <ProtectedRoute>
                <Incidents />
              </ProtectedRoute>
            }
          />
          <Route
            path="leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* TODO: Footer */}
    </div>
  );
}

export default App;
