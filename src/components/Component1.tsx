import React from "react";

const Component1 = () => {
  const programs = [
    { date: "25.12", title: "название программы" },
    { date: "26.12", title: "название программы" },
    { date: "27.12", title: "название программы" },
    { date: "28.12", title: "название программы" },
    { date: "28.12", title: "название программы" },
  ];

  return (
    <div className="flex flex-row">
      <div>
        <p className="uppercase text-white text-3xl text-left font-bold m-3">
          Афиша
          <br /> на декабрь
        </p>
        <div className="bg-white w-48 h-40 m-3 flex justify-center items-center font-bold rounded-xl">
          ФОТО
        </div>
      </div>
      <div>
        {programs.map((program) => (
          <div className="flex flex-row">
            <div className="bg-white p-3 mx-5 w-16 my-1.5 rounded-xl font-bold">
              {program.date}
            </div>
            <div className="uppercase bg-white p-3 my-1.5 rounded-xl font-bold">
              {program.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component1;
