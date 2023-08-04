import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        {/* <User name="Reema (functional component)" location="Nalagarh" /> */}
        <UserClass name="Reema (class component)" location="Nalagarh" />
        <UserClass name="Reeva (class component)" location="Pune" />
      </div>
    );
  }
}

export default About;
// Parent constructor -> Parent render -> Reema constructor -> Reema render -> Reeva constructor -> Reeva render ->
// Reema component did mount -> Reeva component did mount -> Parent component did mount
// This is because of optimization done by React i.e commit of both the components are patched.
// First the render phase (constructor & render) is patched together of same class & the commit phase (componentDidMount)
