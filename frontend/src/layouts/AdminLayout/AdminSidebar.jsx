import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  GitMerge,
  Clock,
  Calendar,
  ShieldCheck,
  Share2,
  BarChart3,
  FileSpreadsheet,
  History,
  Bell,
  Settings,
  Zap,
  LogOut
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export const AdminSidebar = ({ isMobileOpen, closeMobileSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const mainMenuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Leads", icon: Users, path: "/admin/leads" },
    { label: "Assignments", icon: UserCheck, path: "/admin/assignments" },
    { label: "Pipeline", icon: GitMerge, path: "/admin/pipeline" },
    { label: "Follow-ups", icon: Clock, path: "/admin/follow-ups" },
    { label: "Calendar", icon: Calendar, path: "/admin/calendar" },
    { label: "Sales Employees", icon: ShieldCheck, path: "/admin/sales-employees" },
    { label: "Lead Sources", icon: Share2, path: "/admin/lead-sources" },
  ];

  const systemMenuItems = [
    { label: "Reports & Analytics", icon: BarChart3, path: "/admin/reports" },
    { label: "Export Data", icon: FileSpreadsheet, path: "/admin/export" },
    { label: "Activity History", icon: History, path: "/admin/activity-history" },
    { label: "Notifications", icon: Bell, path: "/admin/notifications" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <>
      {/* Overlay for mobile view */}
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={closeMobileSidebar} />
      )}

      <aside className={`admin-sidebar ${isMobileOpen ? "mobile-open" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="brand-logo-icon-centered">
            <Zap size={20} color="#ffffff" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Lead Management</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav" style={{ flex: 1, overflowY: "auto" }}>
          {/* Main Menu Section */}
          <div className="nav-section-label">
            <span>MENU</span>
          </div>

          <ul className="nav-list">
            {mainMenuItems.map((item) => {
              const IconComponent = item.icon;
              const isLeadsActive = item.path === "/admin/leads" && location.pathname.startsWith("/admin/leads");
              const isFollowupsActive = item.path === "/admin/follow-ups" && location.pathname.startsWith("/admin/follow");
              const isTeamActive = item.path === "/admin/sales-employees" && (location.pathname.startsWith("/admin/sales-employee") || location.pathname.startsWith("/admin/team"));
              const isSourcesActive = item.path === "/admin/lead-sources" && (location.pathname.startsWith("/admin/source") || location.pathname.startsWith("/admin/lead-source"));

              return (
                <li key={item.label} className="nav-item">
                  <NavLink
                    to={item.path}
                    onClick={closeMobileSidebar}
                    className={({ isActive }) =>
                      `nav-link ${isActive || isLeadsActive || isFollowupsActive || isTeamActive || isSourcesActive ? "active" : ""}`
                    }
                  >
                    <span className="nav-icon">
                      <IconComponent size={19} />
                    </span>
                    <span className="nav-label">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* System Section */}
          <div className="nav-section-label" style={{ marginTop: "16px" }}>
            <span>SYSTEM & SETTINGS</span>
          </div>

          <ul className="nav-list">
            {systemMenuItems.map((item) => {
              const IconComponent = item.icon;
              const isActivitiesActive = item.path === "/admin/activity-history" && (location.pathname.startsWith("/admin/activit") || location.pathname.startsWith("/admin/activity"));

              return (
                <li key={item.label} className="nav-item">
                  <NavLink
                    to={item.path}
                    onClick={closeMobileSidebar}
                    className={({ isActive }) =>
                      `nav-link ${isActive || isActivitiesActive ? "active" : ""}`
                    }
                  >
                    <span className="nav-icon">
                      <IconComponent size={19} />
                    </span>
                    <span className="nav-label">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer Logout Button */}
        <div className="sidebar-footer">
          <button
            className="sidebar-logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
