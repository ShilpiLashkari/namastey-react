import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { nameOfPerson, locationOfPerson, emailOfPerson } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {nameOfPerson}</h2>
        <h3>Location: {locationOfPerson}</h3>
        <h4>Contact: {emailOfPerson}</h4>
      </div>
    );
  }
}
export default UserClass;
