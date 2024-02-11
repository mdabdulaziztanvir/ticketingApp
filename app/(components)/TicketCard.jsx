import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="p-5 bg-card hover:bg-card-hover rounded-md shadow-lg m-2">
      <div className="flex justify-between ">
        <PriorityDisplay />
        <DeleteBlock />
      </div>
      <h3>Ticket title</h3>
      <hr className="h-px border-0 bg-nav mb-2" />
      <p className="whitespace-pre-wrap">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quis,
        saepe totam accusantium possimus odio fuga facere quo dolor nisi modi
        perferendis consectetur nostrum nulla vero esse, laudantium doloremque
        doloribus!
      </p>
      <div className="flex mt-2">
        <div className="flex  flex-col ">
          <p className="text-xs my-1">08/31/23 10:43PM</p>
          <ProgressBar />
        </div>
        <div className="flex items-end ml-auto ">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
