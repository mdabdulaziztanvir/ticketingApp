import React from "react";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Dashboard;
