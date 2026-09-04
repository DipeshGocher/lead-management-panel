import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  UserPlus,
  Activity,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import { kpiMetricsByDateRange } from "../../data/dashboardMockData";

export const KPICards = ({ dateRange = "this_month" }) => {
  const navigate = useNavigate();
  const currentMetrics = kpiMetricsByDateRange[dateRange] || kpiMetricsByDateRange.this_month;

  const cards = [
    {
      id: "total",
      key: "totalLeads",
      data: currentMetrics.totalLeads,
      icon: Users,
      color: "#ff3b19",
      bgLight: "#fff1ee",
      statusFilter: "All",
    },
    {
      id: "new",
      key: "newLeads",
      data: currentMetrics.newLeads,
      icon: UserPlus,
      color: "#ea580c",
      bgLight: "#fff7ed",
      statusFilter: "New",
    },
    {
      id: "active",
      key: "activeLeads",
      data: currentMetrics.activeLeads,
      icon: Activity,
      color: "#0891b2",
      bgLight: "#ecfeff",
      statusFilter: "Active",
    },
    {
      id: "converted",
      key: "convertedLeads",
      data: currentMetrics.convertedLeads,
      icon: CheckCircle2,
      color: "#15803d",
      bgLight: "#f0fdf4",
      statusFilter: "Converted",
    },
    {
      id: "lost",
      key: "lostLeads",
      data: currentMetrics.lostLeads,
      icon: XCircle,
      color: "#b91c1c",
      bgLight: "#fef2f2",
      statusFilter: "Lost",
    },
    {
      id: "followup",
      key: "pendingFollowups",
      data: currentMetrics.pendingFollowups,
      icon: Clock,
      color: "#b45309",
      bgLight: "#fffbeb",
      statusFilter: "Follow-up",
    },
  ];

  return (
    <div className="kpi-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        const { value, label, change, isPositive, subtext } = card.data;

        return (
          <div
            key={card.id}
            className="kpi-card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/admin/leads?status=${card.statusFilter}`)}
            title={`Click to view ${label}`}
          >
            <div className="kpi-top">
              <div className="kpi-icon-box" style={{ backgroundColor: card.bgLight, color: card.color }}>
                <Icon size={16} />
              </div>
              <div className={`kpi-badge ${isPositive ? "kpi-badge-pos" : "kpi-badge-neg"}`}>
                {isPositive ? <TrendingUp size={11} /> : <AlertCircle size={11} />}
                <span>{change}</span>
              </div>
            </div>

            <div className="kpi-middle">
              <span className="kpi-label">{label}</span>
              <h3 className="kpi-value">{value.toLocaleString()}</h3>
            </div>

            <div className="kpi-bottom">
              <span className="kpi-subtext">{subtext}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
