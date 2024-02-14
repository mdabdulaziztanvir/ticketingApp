import React from "react";

const getTestDatas = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/TestDatas", {
      cache: "no-cache",
    });
    return res.json();
    // const dataToSee = await res.json();

    // console.log(dataToSee);
  } catch (error) {
    console.log("error", error);
  }
};

const Trial = async () => {
  const { testDatas }  = await getTestDatas();

  return (
    <div>
      {testDatas?.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <h2>{item.title2}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Trial;
