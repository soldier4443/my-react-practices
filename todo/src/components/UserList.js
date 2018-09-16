import React, { Component } from "react";
import axios from "axios";

const User = ({ id, name, onClickUser }) => (
  <div>
    <button
      style={{
        backgroundColor: "#eee",
        width: "300px",
        height: "32px",
        marginTop: "2px",
        border: "0"
      }}
      onClick={e => onClickUser(id, name)}
    >
      {name}
    </button>
  </div>
);

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: null,
      loading: false
    };
  }

  componentDidMount = () => {
    this.setState({ loading: false });
    axios
      .get("users")
      .catch(error => {
        console.log(error);
        this.setState({
          error: error,
          loading: false
        });
      })
      .then(response => {
        this.setState({
          users: response.data,
          loading: false
        });
      });
  };

  onClickUser = (id, name) => {
    console.log(`user id: ${id}, name: ${name}`);
  };

  render() {
    const { loading, users, error } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading..</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : users ? (
          users.map((user, index) => (
            <User key={index} onClickUser={this.onClickUser} {...user} />
          ))
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserList;
