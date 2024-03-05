import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namastey react gtjbgjbg
        
        </h2>
      <div>
        <p>Functional Component</p>
        {/* <User
          nameOfPerson={"Shilpu (function)"}
          locationOfPerson={"Noida (Funtion)"}
          emailOfPerson={"shilpilashkari@gmail.com"}
        /> */}
        <p>Class Based Component</p>
        <UserClass
          nameOfPerson={"Shelly (Class A)"}
          locationOfPerson={"Noida (Class A)"}
          emailOfPerson={"shilpilashkari@gmail.com"}
        />
        <br />
      </div>
    </div>
  );
};
export default About;
