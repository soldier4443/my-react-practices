import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Radium from "radium";

const User = Radium(({ id, name, onClickUser }) => (
  <div>
    <button
      style={{
        backgroundColor: "#eee",
        width: "300px",
        height: "32px",
        marginTop: "2px",
        border: "0",
        ":hover": {
          backgroundColor: "#eefaee",
          cursor: "pointer"
        }
      }}
      onClick={e => onClickUser(id, name)}
    >
      {name}
    </button>
  </div>
));

class UserList extends Component {
  static propTypes = {
    onClickUser: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
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
    this.props.onClickUser(id, name);
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
