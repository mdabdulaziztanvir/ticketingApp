import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="p-5 bg-card hover:bg-card-hover rounded-md shadow-lg m-2">
      <div className="flex justify-between ">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>
      <h3 className="overflow-hidden overflow-ellipsis">{ticket.title}</h3>
      <hr className="h-px border-0 bg-nav mb-2" />
      <p className="whitespace-pre-wrap overflow-hidden overflow-ellipsis">
        {ticket.description}
      </p>
      <div className="flex mt-2">
        <div className="flex  flex-col ">
          <p className="text-xs my-1">{ticket.createdAt}</p>
          <ProgressBar progress = {ticket.progress} />
        </div>
        <div className="flex items-end ml-auto ">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
