import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      count3: 2,
      useInfo: {
        name: "Dummy",
        location: "Defualt",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("REACT INTERVAL");
    }, 3000);
    const data = await fetch("https://api.github.com/users/ree-ma-thakur");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
    console.log(this.props.name + "child component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //code
    }
    if (this.state.count3 !== prevState.count3) {
      //code other logic
    }
    console.log(this.props.name + "component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "component will unmount");
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, location } = this.props;
    const { count, count2, userInfo } = this.state;
    return (
      <div className="user-card">
        <img src={userInfo?.avatar_url} />
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATES STATE VARIABLE DIRECTLY
            //this.state.count = this.state.count+1
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <h2>Name: {userInfo?.login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 8629858600</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      componentDid Update
 */
