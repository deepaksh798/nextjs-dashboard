const UpcomingEvents = () => {
  const upcomingEvents = [
    { id: 1, title: "Team Meeting", date: "Jan 10", time: "10:00 AM" },
    { id: 2, title: "Performance Review", date: "Jan 12", time: "2:00 PM" },
    { id: 3, title: "Training Session", date: "Jan 15", time: "9:00 AM" },
  ];
  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-base-content">Upcoming Events</h2>
          <div className="space-y-3 mt-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-3 bg-base-200 rounded-lg">
                <p className="font-semibold text-sm text-base-content">
                  {event.title}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-base-content/70 font-medium">
                    {event.date}
                  </p>
                  <p className="text-xs text-base-content/70">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary btn-sm">Add Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
