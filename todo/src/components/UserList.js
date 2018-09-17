import React, { Component } from "react";
import Radium from "radium";
import DataComponent from "./DataComponent";

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

const UserList = DataComponent(({ data, onClickUser }) => {
  return (
    <div>
      {data.map((user, index) => (
        <User key={index} onClickUser={onClickUser} {...user} />
      ))}
    </div>
  );
}, "users");

export default UserList;
