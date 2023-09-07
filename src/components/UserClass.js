import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { nameOfPerson, locationOfPerson, emailOfPerson } = this.props;
    const { count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {nameOfPerson}</h2>
        <h3>Location: {locationOfPerson}</h3>
        <h4>Contact: {emailOfPerson}</h4>
        <h5>Count: {this.state.count}</h5>
        <h6>Count2: {count2}</h6>
      </div>
    );
  }
}
export default UserClass;
