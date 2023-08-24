import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { useState } from "react";

import List from "./List";
const Welcome = () => {
  const [data, setData] = useState("Motu!");
  console.log("Running!");
  return (
    <div className="">
      <List data={data} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("welcome"));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);
// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(<Welcome />, document.getElementById("welcome"));
// });

export default Welcome;
