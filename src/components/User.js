import { useState } from "react";
const User = ({ nameOfPerson, locationOfPerson, emailOfPerson }) => {
  const [count] = useState(0);
  const [count2] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {nameOfPerson}</h2>
      <h3>Location: {locationOfPerson}</h3>
      <h4>Contact: {emailOfPerson}</h4>
      <h5>Count: {count}</h5>
      <h6>Count2:{count2}</h6>
    </div>
  );
};

export default User;
