import * as React from "react";

const List = (props) => {
  console.log("props", props);
  const list = [
    {
      name: "Welcome",
      tag: "User",
    },
    {
      name: "Rails",
      tag: "Framework",
    },
    {
      name: "React",
      tag: "Framework",
    },
  ];
  return (
    <div className="">
      {list.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{props.data}</h2>
          <p>{item.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
