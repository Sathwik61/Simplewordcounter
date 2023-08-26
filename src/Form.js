import React, { useState } from "react";

// import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [text, setText] = useState("");
  let up = "";
  const val = text;
  let a = -1;
  a += text.split(" ").length;

  up = val.toUpperCase();

  const handle = () => {
    setText("clicked the button to convert upper case");
    console.log(up);
    a = -1;
    setText("");
  };

  const chnge = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center my-12">
        <textarea
          rows={5}
          onChange={chnge}
          cols={80}
          value={text}
          className="bg-gray-300 shadow-sm text-slate-950 py-5 text-center"
        />
      </div>
      <div className="flex mx-[28%]">
        <button
          type="button"
          onClick={handle}
          className="text-white shadow-lg  bg-purple-800 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
        >
          Reset
        </button>
      </div>
      <div className="flex mx-[23%] my-[3vh]">
        <span className=" text-xl shadow-sm">Words Count = {a}</span>
      </div>
      <div className="flex mx-[23%] my-[2vh]">
        <span className="font-bold text-xl shadow-sm">Preview:</span>
      </div>
      <div className="mx-[25%] my-5  max-w-1vw whitespace-normal">
        <p className="  text-start">{up}</p>
      </div>
    </>
  );
}
