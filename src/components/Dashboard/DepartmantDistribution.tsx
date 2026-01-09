const departments = [
  { name: "Engineering", employees: 85, percentage: 35 },
  { name: "Sales", employees: 62, percentage: 25 },
  { name: "Marketing", employees: 48, percentage: 20 },
  { name: "HR", employees: 25, percentage: 10 },
  { name: "Finance", employees: 25, percentage: 10 },
];
const DepartmantDistribution = () => {
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-base-content">
          Department Distribution
        </h2>
        <div className="space-y-4 mt-4">
          {departments.map((dept, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-base-content">
                  {dept.name}
                </span>
                <span className="text-sm text-base-content/70 font-medium">
                  {dept.employees} employees
                </span>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={dept.percentage}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmantDistribution;
