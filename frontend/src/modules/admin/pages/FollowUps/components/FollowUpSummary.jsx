import React from "react";
import { Calendar, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

export const FollowUpSummary = ({ stats }) => {
  const cards = [
    {
      title: "Today's Follow-ups",
      count: stats.today,
      subtext: "Scheduled for today",
      icon: Calendar,
      color: "#ff3b19",
      bg: "#fff1ee",
    },
    {
      title: "Upcoming",
      count: stats.upcoming,
      subtext: "Future scheduled tasks",
      icon: Clock,
      color: "#ea580c",
      bg: "#fff7ed",
    },
    {
      title: "Overdue",
      count: stats.overdue,
      subtext: "Action required immediately",
      icon: AlertTriangle,
      color: "#e11d48",
      bg: "rgba(225, 29, 72, 0.1)",
      highlight: true,
    },
    {
      title: "Completed",
      count: stats.completed,
      subtext: "Finished interactions",
      icon: CheckCircle2,
      color: "#16a34a",
      bg: "rgba(22, 163, 74, 0.1)",
    },
  ];

  return (
    <div className="followup-summary-grid">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.title}
            className={`crm-card overview-stat-card ${c.highlight ? "highlight-overdue" : ""}`}
          >
            <div className="stat-card-inner">
              <div className="stat-info">
                <span className="stat-label">{c.title}</span>
                <div className="stat-value" style={{ color: c.color }}>{c.count}</div>
                <span className="stat-subtext">{c.subtext}</span>
              </div>
              <div className="stat-icon-wrapper" style={{ backgroundColor: c.bg, color: c.color }}>
                <Icon size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
