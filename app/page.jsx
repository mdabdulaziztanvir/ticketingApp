import React from "react";
import TicketCard from "./(components)/TicketCard";

// fetching ticket
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.log("Tickets Fetch failed", error);
  }
};

const getTestData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/TestDatas", {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.error("test data failed to fetch", error);
    throw error;
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  //  by category need to shown them
  const { dataOfTests } = await getTestData();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
      {/* added my titles */}
      {/* <div>
        {dataOfTests.map((dataOfTest, index) => {
          <h2 key={index}>{dataOfTest.title}</h2> }
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;
