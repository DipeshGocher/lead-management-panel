import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Activity, Clock, CheckCircle2, Phone, MessageSquare, ArrowRight, Sparkles, Kanban, Calendar } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import "./SalesPages.css";

export const SalesDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const salesName = user?.name ? user.name.split(" ")[0] : "Representative";

  const todayTasks = [
    { lead: "Rahul Sharma", company: "Rahul Traders", type: "Call", time: "11:30 AM", phone: "+91 98765 43210" },
    { lead: "Suresh Patel", company: "Patel Chemicals", type: "Demo", time: "02:15 PM", phone: "+91 98765 11111" },
    { lead: "Vikram Aditya", company: "Aditya Enterprises", type: "Meeting", time: "04:00 PM", phone: "+91 98765 22222" },
  ];

  return (
    <div className="sales-page-container">
      {/* Mobile App Hero Welcome Card */}
      <div className="sales-mobile-hero">
        <div className="sales-hero-text">
          <h2>Hi, {salesName}! 👋</h2>
          <p>Here is your sales overview for today.</p>
        </div>
        <div className="sales-hero-badge">
          <Sparkles size={12} style={{ display: "inline", marginRight: "3px" }} />
          Active Rep
        </div>
      </div>

      {/* KPI 4-Card Grid (4 on Desktop/Tablet, 2x2 on Mobile) */}
      <div className="sales-mobile-kpi-grid">
        {/* Card 1: My Leads */}
        <div
          className="sales-mobile-kpi-card"
          onClick={() => navigate("/sales/leads")}
        >
          <div className="sales-kpi-top-row">
            <span className="sales-kpi-title">My Leads</span>
            <div className="sales-kpi-icon-halo" style={{ background: "#fff1ee", color: "#ff3b19" }}>
              <Users size={16} />
            </div>
          </div>
          <div className="sales-kpi-num">42</div>
          <span style={{ fontSize: "0.685rem", color: "#059669", fontWeight: 700 }}>+3 this week</span>
        </div>

        {/* Card 2: Active Prospects */}
        <div
          className="sales-mobile-kpi-card"
          onClick={() => navigate("/sales/pipeline")}
        >
          <div className="sales-kpi-top-row">
            <span className="sales-kpi-title">Prospects</span>
            <div className="sales-kpi-icon-halo" style={{ background: "#fff7ed", color: "#ea580c" }}>
              <Activity size={16} />
            </div>
          </div>
          <div className="sales-kpi-num">28</div>
          <span style={{ fontSize: "0.685rem", color: "#ea580c", fontWeight: 700 }}>In pipeline</span>
        </div>

        {/* Card 3: Follow-ups */}
        <div
          className="sales-mobile-kpi-card"
          onClick={() => navigate("/sales/follow-ups")}
        >
          <div className="sales-kpi-top-row">
            <span className="sales-kpi-title">Follow-ups</span>
            <div className="sales-kpi-icon-halo" style={{ background: "#fef3c7", color: "#d97706" }}>
              <Clock size={16} />
            </div>
          </div>
          <div className="sales-kpi-num">5</div>
          <span style={{ fontSize: "0.685rem", color: "#d97706", fontWeight: 700 }}>Due today</span>
        </div>

        {/* Card 4: Converted */}
        <div
          className="sales-mobile-kpi-card"
          onClick={() => navigate("/sales/leads?status=Converted")}
        >
          <div className="sales-kpi-top-row">
            <span className="sales-kpi-title">Converted</span>
            <div className="sales-kpi-icon-halo" style={{ background: "#dcfce7", color: "#16a34a" }}>
              <CheckCircle2 size={16} />
            </div>
          </div>
          <div className="sales-kpi-num">6</div>
          <span style={{ fontSize: "0.685rem", color: "#16a34a", fontWeight: 700 }}>Won deals</span>
        </div>
      </div>

      {/* Two Column Section for Desktop / Tablet; Stacked for Mobile */}
      <div className="sales-dashboard-two-col">
        {/* Left: Today's Schedule Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Today's Schedule ({todayTasks.length})
            </h3>
            <button
              type="button"
              onClick={() => navigate("/sales/follow-ups")}
              style={{
                background: "none",
                border: "none",
                color: "#ff3b19",
                fontSize: "0.775rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              See All <ArrowRight size={13} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {todayTasks.map((task, idx) => (
              <div key={idx} className="sales-mobile-task-card">
                <div className="sales-task-left-content">
                  <div className="sales-task-icon-circle">
                    <Clock size={16} />
                  </div>
                  <div className="sales-task-meta">
                    <h4 className="sales-task-lead-name">{task.lead}</h4>
                    <span className="sales-task-details">{task.company} · {task.type}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <a
                    href={`tel:${task.phone}`}
                    className="btn-mobile-call"
                    title="Call Lead"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={12} />
                  </a>
                  <a
                    href={`https://wa.me/${task.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mobile-wa"
                    title="WhatsApp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageSquare size={12} />
                  </a>
                  <span className="sales-task-time-badge">{task.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Action Navigation Shortcuts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            Quick Shortcuts
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div
              onClick={() => navigate("/sales/leads")}
              style={{
                background: "#ffffff",
                border: "1px solid #ece7dc",
                borderLeft: "4px solid #ff3b19",
                borderRadius: "14px",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ background: "#fff1ee", color: "#ff3b19", padding: "8px", borderRadius: "10px" }}>
                <Users size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "0.825rem", color: "#141416", display: "block" }}>My Leads Directory</strong>
                <span style={{ fontSize: "0.7rem", color: "#71717a" }}>Manage and view assigned prospects</span>
              </div>
              <ArrowRight size={14} color="#a1a1aa" />
            </div>

            <div
              onClick={() => navigate("/sales/pipeline")}
              style={{
                background: "#ffffff",
                border: "1px solid #ece7dc",
                borderLeft: "4px solid #ff3b19",
                borderRadius: "14px",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ background: "#f0fdf4", color: "#16a34a", padding: "8px", borderRadius: "10px" }}>
                <Kanban size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "0.825rem", color: "#141416", display: "block" }}>Sales Pipeline Stages</strong>
                <span style={{ fontSize: "0.7rem", color: "#71717a" }}>Track stage movements and progress</span>
              </div>
              <ArrowRight size={14} color="#a1a1aa" />
            </div>

            <div
              onClick={() => navigate("/sales/calendar")}
              style={{
                background: "#ffffff",
                border: "1px solid #ece7dc",
                borderLeft: "4px solid #ff3b19",
                borderRadius: "14px",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ background: "#fff7ed", color: "#ea580c", padding: "8px", borderRadius: "10px" }}>
                <Calendar size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "0.825rem", color: "#141416", display: "block" }}>Sales Calendar</strong>
                <span style={{ fontSize: "0.7rem", color: "#71717a" }}>Review meeting schedule and events</span>
              </div>
              <ArrowRight size={14} color="#a1a1aa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
