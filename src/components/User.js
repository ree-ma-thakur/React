import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {props?.name}</h2>
      <h3>Location: {props?.location}</h3>
      <h4>Contact: 8629858600</h4>
    </div>
  );
};

export default User;
