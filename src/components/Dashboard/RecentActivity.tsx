import { Clock } from "lucide-react";
import React from "react";

const RecentActivity = () => {
  // Recent activities
  const recentActivities = [
    {
      id: 1,
      name: "John Doe",
      action: "Applied for leave",
      time: "2 hours ago",
      avatar: "JD",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      action: "Updated profile",
      time: "3 hours ago",
      avatar: "SW",
    },
    {
      id: 3,
      name: "Mike Johnson",
      action: "Submitted timesheet",
      time: "5 hours ago",
      avatar: "MJ",
    },
    {
      id: 4,
      name: "Emily Brown",
      action: "Completed onboarding",
      time: "1 day ago",
      avatar: "EB",
    },
  ];

  return (
    <div className="lg:col-span-2">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-base-content">Recent Activity</h2>
          <div className="space-y-4 mt-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-3 hover:bg-base-200 rounded-lg transition-colors"
              >
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-12 flex items-center justify-center">
                    <span className="text-sm">{activity.avatar}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base-content">
                    {activity.name}
                  </p>
                  <p className="text-sm text-base-content/70">
                    {activity.action}
                  </p>
                </div>
                <div className="text-xs text-base-content/60 flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-ghost btn-sm text-primary">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
