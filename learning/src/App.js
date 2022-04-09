import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchKey: "",
    };
  }

  componentDidMount() {
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
    const handleChange = (e) =>
      this.setState(() => {
        this.setState.searchKey = e.target.value.toLocaleLowerCase();
        return this.setState;
      });

    const filteredMonster = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchKey)
    );
    return (
      <div className="App">
        <header className="App-header">
          <input
            className="search-box"
            placeholder="search monster "
            onChange={handleChange}
          />

          <div className="card-list">
            {filteredMonster.map((user) => (
              <div className="card-container" key={user.id}>
                <img
                  src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                />
                <h2>{user.name}</h2>
                <p>{user?.email}</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
