"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TestData = () => {
  const router = useRouter();

  const startingTestData = {
    title: "",
  };
  // default value need to  assign here
  const [testData, setTestdata] = useState(startingTestData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTestdata((d) => ({
      ...d,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/TestDatas", {
      method: "POST",
      body: JSON.stringify({
        testData,
      }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("faild to send data to database");
    }
    router.refresh();
    router.push("/");
  };
  return (
    <div className="text-nav flex ">
      <form
        className="flex flex-col bg-slate-500 p-5 rounded-xl"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label> Input some data to test by devWiz</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={testData.title}
          required={true}
        />
        <input type="submit" className="btn mt-2" />
      </form>
    </div>
  );
};

export default TestData;
