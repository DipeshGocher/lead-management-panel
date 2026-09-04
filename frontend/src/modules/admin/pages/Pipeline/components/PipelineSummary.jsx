import React from "react";
import { Users, Sparkles, PhoneCall, Clock, Heart, CheckCircle2, XCircle } from "lucide-react";

export const PipelineSummary = ({ leads }) => {
  const countStage = (status) => leads.filter((l) => l.status === status).length;

  const total = leads.length;
  const newCount = countStage("New");
  const contactedCount = countStage("Contacted");
  const followupCount = countStage("Follow-up");
  const interestedCount = countStage("Interested");
  const convertedCount = countStage("Converted");
  const lostCount = countStage("Lost");

  const cards = [
    { title: "Total Leads", count: total, icon: Users, color: "#4f46e5", bg: "rgba(79, 70, 229, 0.1)" },
    { title: "New", count: newCount, icon: Sparkles, color: "#ff3b19", bg: "rgba(255, 59, 25, 0.1)" },
    { title: "Contacted", count: contactedCount, icon: PhoneCall, color: "#0891b2", bg: "rgba(8, 145, 178, 0.1)" },
    { title: "Follow-up", count: followupCount, icon: Clock, color: "#d97706", bg: "rgba(217, 119, 6, 0.1)" },
    { title: "Interested", count: interestedCount, icon: Heart, color: "#9333ea", bg: "rgba(147, 51, 234, 0.1)" },
    { title: "Converted", count: convertedCount, icon: CheckCircle2, color: "#16a34a", bg: "rgba(22, 163, 74, 0.1)" },
    { title: "Lost", count: lostCount, icon: XCircle, color: "#e11d48", bg: "rgba(225, 29, 72, 0.1)" },
  ];

  return (
    <div className="pipeline-summary-grid">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.title} className="crm-card summary-mini-card">
            <div className="summary-card-inner">
              <div className="summary-card-info">
                <span className="summary-card-label">{c.title}</span>
                <span className="summary-card-count" style={{ color: c.color }}>
                  {c.count}
                </span>
              </div>
              <div className="summary-card-icon" style={{ backgroundColor: c.bg, color: c.color }}>
                <Icon size={16} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
