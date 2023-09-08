import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Jane Doe",
        location: "Delhi",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ShilpiLashkari");
    const json = await data.json();
    //    console.log("data : ", json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const { nameOfPerson, locationOfPerson, emailOfPerson } = this.props; //Props received from about page
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Company : {company}</h4>
      </div>
    );
  }
}
export default UserClass;
