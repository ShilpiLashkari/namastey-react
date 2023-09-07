const User = ({ nameOfPerson, locationOfPerson, emailOfPerson }) => {
  return (
    <div className="user-card">
      <h2>Name: {nameOfPerson}</h2>
      <h3>Location: {locationOfPerson}</h3>
      <h4>Contact: {emailOfPerson}</h4>
    </div>
  );
};

export default User;
