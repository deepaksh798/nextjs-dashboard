"use client";

import DepartmantDistribution from "@/components/Dashboard/DepartmantDistribution";
import QuickActions from "@/components/Dashboard/QuickActions";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import StatsGrid from "@/components/Dashboard/StatsGrid";
import UpcomingEvents from "@/components/Dashboard/UpcomingEvents";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-base-content">
          Welcome to the HR Dashboard
        </h1>
        <p className="text-base-content/70 mt-1">
          Here's what's happening with your team today
        </p>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <RecentActivity />
        {/* Upcoming Events */}
        <UpcomingEvents />
      </div>

      {/* Department Distribution */}
      <DepartmantDistribution />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
}
