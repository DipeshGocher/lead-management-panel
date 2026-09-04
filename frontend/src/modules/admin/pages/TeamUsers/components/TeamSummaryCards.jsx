import React from "react";
import { Users, UserCheck, Activity, CheckCircle2 } from "lucide-react";

export const TeamSummaryCards = ({ stats }) => {
  const cards = [
    {
      title: "TOTAL SALES USERS",
      count: stats.total,
      subtext: "System registered users",
      icon: Users,
      color: "#ff3b19",
      bg: "#fff1ee",
    },
    {
      title: "ACTIVE SALES EMPLOYEES",
      count: stats.active,
      subtext: "Active lead handlers",
      icon: UserCheck,
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
    },
    {
      title: "ASSIGNED LEADS",
      count: stats.assignedLeads || 31,
      subtext: "Allocated in pipeline",
      icon: Activity,
      color: "#ea580c",
      bg: "#fff7ed",
    },
    {
      title: "CONVERTED DEALS",
      count: stats.convertedDeals || 10,
      subtext: "Deals won by sales team",
      icon: CheckCircle2,
      color: "#16a34a",
      bg: "rgba(22, 163, 74, 0.1)",
    },
  ];

  return (
    <div className="team-summary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.title} className="crm-card overview-stat-card" style={{ background: "#ffffff", border: "1px solid #ece7dc", padding: "16px 20px" }}>
            <div className="stat-card-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="stat-info">
                <span className="stat-label" style={{ fontSize: "0.725rem", fontWeight: 700, color: "#64748b", letterSpacing: "0.05em" }}>{c.title}</span>
                <div className="stat-value" style={{ fontSize: "1.8rem", fontWeight: 800, color: c.color, margin: "2px 0" }}>{c.count}</div>
                <span className="stat-subtext" style={{ fontSize: "0.725rem", color: "#64748b" }}>{c.subtext}</span>
              </div>
              <div className="stat-icon-wrapper" style={{ backgroundColor: c.bg, color: c.color, width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
