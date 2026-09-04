import React from "react";
import { Users, UserPlus, Activity, CheckCircle2 } from "lucide-react";

export const LeadSummaryCards = ({ metrics }) => {
  const cards = [
    {
      title: "Total Leads",
      count: metrics.total || 184,
      icon: Users,
      color: "#ff3b19",
      bgLight: "#fff1ee",
    },
    {
      title: "New",
      count: metrics.new || 38,
      icon: UserPlus,
      color: "#ea580c",
      bgLight: "#fff7ed",
    },
    {
      title: "Active",
      count: metrics.active || 96,
      icon: Activity,
      color: "#0891b2",
      bgLight: "#ecfeff",
    },
    {
      title: "Converted",
      count: metrics.converted || 42,
      icon: CheckCircle2,
      color: "#16a34a",
      bgLight: "#f0fdf4",
    },
  ];

  return (
    <div className="summary-cards-grid">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className="summary-card">
            <div className="summary-card-icon" style={{ backgroundColor: card.bgLight, color: card.color }}>
              <Icon size={18} />
            </div>
            <div className="summary-card-info">
              <span className="summary-card-label">{card.title}</span>
              <h4 className="summary-card-val">{card.count}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
