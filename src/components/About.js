import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namastey react</h2>
      <div>
        <p>Functional Component</p>
        {/* <User
          nameOfPerson={"Shilpu (function)"}
          locationOfPerson={"Noida (Funtion)"}
          emailOfPerson={"shilpilashkari@gmail.com"}
        /> */}
        <p>Class Based Component</p>
        <UserClass
          nameOfPerson={"Shelly (class)"}
          locationOfPerson={"Noida (Class)"}
          emailOfPerson={"shilpilashkari@gmail.com"}
        />
      </div>
    </div>
  );
};
export default About;
