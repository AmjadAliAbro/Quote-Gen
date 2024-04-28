"use client";
import React, { useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = React.useState();
  const [author, setAuthor] = React.useState();
  const apiUrl = `https://api.quotable.io/random`;

  function getData() {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-[400px] bg-[#fff] mx-[10px] p-[10px] rounded-[5px] flex flex-col">
        <h1 className="text-[35px] text-center">Quote Of The Day</h1>
        <p className="text-[23px] text-center py-5">{quote}
        </p>
        <p className="text-[16px] text-end">{author}</p>
        <button onClick={getData} className="bg-[#333] text-white rounded-md p-2 w-[120px] flex justify-center self-center">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
