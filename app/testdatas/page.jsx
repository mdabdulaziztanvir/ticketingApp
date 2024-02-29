"use client";
import React, { useState, useEffect } from "react";

const TestDatas = () => {
  const [dataOfTests, setDataOfTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/TestDatas", {
          cache: "no-cache",
        });
        // const testData = await res.json();
        // setDataOfTests(testData.testdata);
        const { testDatas } = await res.json(); //eta database er name er moto hote hobe or
        console.log(testDatas);
        setDataOfTests(testDatas);
      } catch (error) {
        console.error("Test data failed to fetch", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex  gap-5 ">
        {dataOfTests.map((dataOfTest, index) => (
          <div className="flex flex-col gap-5 bg-card-hover" key={index}>
            <h2>{dataOfTest.title}</h2>
            <h2>{dataOfTest.title2}</h2>
            <p>{dataOfTest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestDatas;
