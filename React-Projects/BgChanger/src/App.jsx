import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-full min-h-screen "
      style={{ backgroundColor: color }}
    >
    <div className="min-h-screen flex items-center justify-center  text-white">
  <h1 className="text-5xl font-bold tracking-tight">Hey! I am Background-changer.🌈</h1>
</div>

      <div className="flex flex-wrap justify-evenly px-8 py-2 absolute bottom-10 bg-white rounded-full left-5 right-5">
        <button
          className=" rounded-full bg-red-500 px-8 py-2 text-white "
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className="rounded-full bg-blue-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="rounded-full bg-green-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="rounded-full bg-yellow-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="rounded-full bg-purple-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("purple");
          }}
        >
          Purple
        </button>
        <button
          className="rounded-full bg-pink-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("pink");
          }}
        >
          Pink
        </button>
        <button
          className="rounded-full bg-indigo-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("indigo");
          }}
        >
          Indigo
        </button>
        <button
          className="rounded-full bg-teal-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("teal");
          }}
        >
          Teal
        </button>
        <button
          className="rounded-full bg-orange-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("orange");
          }}
        >
          Orange
        </button>
        <button
          className="rounded-full bg-gray-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("gray");
          }}
        >
          Gray
        </button>
        <button
          className="rounded-full bg-cyan-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("cyan");
          }}
        >
          Cyan
        </button>
        <button
          className="rounded-full bg-lime-500 px-8 py-2 text-white"
          onClick={() => {
            setColor("lime");
          }}
        >
          Lime
        </button>
      </div>
    </div>
  );
}

export default App;
