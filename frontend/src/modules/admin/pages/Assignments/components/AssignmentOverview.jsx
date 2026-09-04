import React from "react";
import { Users, UserX, UserCheck, ShieldCheck } from "lucide-react";

export const AssignmentOverview = ({ stats }) => {
  const cards = [
    {
      title: "Total Leads",
      value: stats.total,
      subtext: "System wide leads",
      icon: Users,
      iconBg: "#fff1ee",
      iconColor: "#ff3b19",
    },
    {
      title: "Unassigned",
      value: stats.unassigned,
      subtext: "Needs delegation",
      icon: UserX,
      iconBg: "rgba(245, 158, 11, 0.1)",
      iconColor: "#d97706",
      highlight: true,
    },
    {
      title: "Assigned",
      value: stats.assigned,
      subtext: "Active in pipeline",
      icon: UserCheck,
      iconBg: "rgba(16, 185, 129, 0.1)",
      iconColor: "#059669",
    },
    {
      title: "Sales Employees",
      value: stats.salespersonsCount,
      subtext: "Active team members",
      icon: ShieldCheck,
      iconBg: "#fff7ed",
      iconColor: "#ea580c",
    },
  ];

  return (
    <div className="assignment-overview-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.title} className={`crm-card overview-stat-card ${card.highlight ? "highlight-warning" : ""}`}>
            <div className="stat-card-inner">
              <div className="stat-info">
                <span className="stat-label">{card.title}</span>
                <div className="stat-value">{card.value}</div>
                <span className="stat-subtext">{card.subtext}</span>
              </div>
              <div
                className="stat-icon-wrapper"
                style={{ backgroundColor: card.iconBg, color: card.iconColor }}
              >
                <Icon size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
