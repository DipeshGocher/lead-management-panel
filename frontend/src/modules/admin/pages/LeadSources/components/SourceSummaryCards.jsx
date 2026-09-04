import React from "react";
import { Share2, Users, CheckCircle2, TrendingUp } from "lucide-react";

export const SourceSummaryCards = ({ stats }) => {
  const cards = [
    {
      title: "Total Sources",
      count: stats.totalSources,
      subtext: "Active lead sources",
      icon: Share2,
      color: "#ff3b19",
      bg: "#fff1ee",
    },
    {
      title: "Total Leads",
      count: stats.totalLeads,
      subtext: "Leads from all sources",
      icon: Users,
      color: "#ea580c",
      bg: "#fff7ed",
    },
    {
      title: "Converted Leads",
      count: stats.convertedLeads,
      subtext: "Successfully converted",
      icon: CheckCircle2,
      color: "#16a34a",
      bg: "rgba(22, 163, 74, 0.1)",
    },
    {
      title: "Best Performing Source",
      count: stats.bestSource,
      subtext: "Highest conversion rate",
      icon: TrendingUp,
      color: "#9333ea",
      bg: "rgba(147, 51, 234, 0.1)",
    },
  ];

  return (
    <div className="source-summary-grid">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.title} className="crm-card overview-stat-card">
            <div className="stat-card-inner">
              <div className="stat-info">
                <span className="stat-label">{c.title}</span>
                <div className="stat-value" style={{ color: c.color, fontSize: typeof c.count === "string" ? "1.25rem" : "1.75rem" }}>
                  {c.count}
                </div>
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
