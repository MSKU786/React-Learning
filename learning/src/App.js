import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("hello");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (user) =>
          this.setState(() => {
            this.state.users = user;
            return this.state;
          }),
        () => {
          console.log(this.state);
        }
      );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input placeholder="monster" />
          <div>
            {this.state.users.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
