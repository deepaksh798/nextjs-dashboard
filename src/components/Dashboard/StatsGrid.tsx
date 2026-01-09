import {
  Users,
  UserCheck,
  Calendar,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const StatsGrid = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "245",
      change: "+12%",
      icon: Users,
      color: "primary",
    },
    {
      title: "Present Today",
      value: "198",
      change: "+5%",
      icon: UserCheck,
      color: "secondary",
    },
    {
      title: "On Leave",
      value: "8",
      change: "-2%",
      icon: Calendar,
      color: "accent",
    },
    {
      title: "Monthly Payroll",
      value: "$125K",
      change: "+8%",
      icon: DollarSign,
      color: "success",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="card-body">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base-content/70 text-sm font-medium">
                    {stat.title}
                  </p>
                  <h3 className="text-3xl font-bold text-base-content mt-1">
                    {stat.value}
                  </h3>
                  <p className="text-success text-sm mt-1 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                  <Icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
