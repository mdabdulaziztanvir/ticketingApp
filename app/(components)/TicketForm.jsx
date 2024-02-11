"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware Problem",
  };
  const [formData, setFormdata] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormdata((n) => ({
      ...n,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }
    router.refresh();
    router.push("/");
  };


  return (
    <>
      <div className="flex justify-center">
        <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
          <h3>Create Your Ticket</h3>
          <label>Title</label>
          <input
            className=" bg-card-hover"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            required={true}
          />
          <label>Description</label>
          <textarea
            className=" bg-card-hover"
            id="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
            required={true}
            rows={5}
          />
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-card-hover"
          >
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Project">Project</option>
          </select>

          <label>Priority</label>
          <div>
            <input
              type="radio"
              id="priority-1"
              value={1}
              name="priority"
              onChange={handleChange}
              checked={formData.priority == 1}
            />
            <label>1</label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-1"
              value={2}
              name="priority"
              onChange={handleChange}
              checked={formData.priority == 2}
            />
            <label>2</label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-1"
              value={3}
              name="priority"
              onChange={handleChange}
              checked={formData.priority == 3}
            />
            <label>3</label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-1"
              value={4}
              name="priority"
              onChange={handleChange}
              checked={formData.priority == 4}
            />
            <label>4</label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-1"
              value={5}
              name="priority"
              onChange={handleChange}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
          <label>Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min={0}
            max={100}
            onChange={handleChange}
          />
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="bg-card-hover"
          >
            <option value="Not started">Not started</option>
            <option value="Started">Started</option>
            <option value="Done">Done</option>
          </select>
          <input type="submit" className="btn mt-3" value="create Ticket" />
        </form>
      </div>
    </>
  );
};

export default TicketForm;
