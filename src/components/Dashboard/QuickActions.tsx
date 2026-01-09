import { Users, Calendar, DollarSign, Clock } from "lucide-react";
const QuickActions = () => {
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-base-content">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <button className="btn btn-outline btn-primary">
            <Users className="w-4 h-4 mr-2" />
            Add Employee
          </button>
          <button className="btn btn-outline btn-secondary">
            <Calendar className="w-4 h-4 mr-2" />
            Manage Leave
          </button>
          <button className="btn btn-outline btn-accent">
            <DollarSign className="w-4 h-4 mr-2" />
            Process Payroll
          </button>
          <button className="btn btn-outline">
            <Clock className="w-4 h-4 mr-2" />
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
