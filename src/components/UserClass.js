import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { nameOfPerson, locationOfPerson, emailOfPerson } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Count Increase
          </button>
        </div>
        <h2>Name: {nameOfPerson}</h2>
        <h3>Location: {locationOfPerson}</h3>
        <h4>Contact: {emailOfPerson}</h4>
      </div>
    );
  }
}
export default UserClass;
