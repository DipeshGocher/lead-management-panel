import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, UserCheck, GitMerge, Clock, Sparkles } from "lucide-react";

export const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      id: "add_lead",
      title: "Add New Lead",
      description: "Create a manual lead record in system",
      icon: UserPlus,
      color: "#ff3b19",
      bgColor: "#fff1ee",
      btnText: "+ New Lead",
      path: "/admin/leads/add",
    },
    {
      id: "assign_leads",
      title: "Assign Leads",
      description: "Distribute unassigned leads to team",
      icon: UserCheck,
      color: "#0891b2",
      bgColor: "#ecfeff",
      btnText: "Assign Now",
      path: "/admin/assignments",
    },
    {
      id: "view_pipeline",
      title: "View Pipeline",
      description: "Visual Kanban board of lead stages",
      icon: GitMerge,
      color: "#15803d",
      bgColor: "#f0fdf4",
      btnText: "Open Board",
      path: "/admin/pipeline",
    },
    {
      id: "create_followup",
      title: "Create Follow-up",
      description: "Schedule reminder call/meeting for rep",
      icon: Clock,
      color: "#b45309",
      bgColor: "#fffbeb",
      btnText: "Schedule",
      path: "/admin/follow-ups",
    },
  ];

  return (
    <div className="crm-card quick-actions-card">
      <div className="card-header-flex">
        <div>
          <h2 className="card-title">Quick Actions</h2>
          <p className="card-subtitle">Fast administrative workflow triggers</p>
        </div>
        <span className="sparkle-badge">
          <Sparkles size={13} /> Admin Panel
        </span>
      </div>

      <div className="actions-grid">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <div
              key={act.id}
              className="action-tile"
              onClick={() => navigate(act.path)}
              style={{ cursor: "pointer" }}
              title={`Open ${act.title}`}
            >
              <div
                className="action-icon-wrapper"
                style={{ backgroundColor: act.bgColor, color: act.color }}
              >
                <Icon size={20} />
              </div>
              <div className="action-info">
                <h4 className="action-title">{act.title}</h4>
                <p className="action-desc">{act.description}</p>
              </div>
              <button
                type="button"
                className="crm-btn crm-btn-subtle action-btn"
                style={{ color: act.color, backgroundColor: act.bgColor }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(act.path);
                }}
              >
                {act.btnText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
