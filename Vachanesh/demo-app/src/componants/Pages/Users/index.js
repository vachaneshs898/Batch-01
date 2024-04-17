import React from "react";
import { users } from "componants/Data/users";
import Card from "componants/UI/Card";
import Button from "componants/UI/Button";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      {users.map((user) => {
        return (
          <Card>
            <div>
              <span>
                <b>Name : </b>
              </span>
              <span>{user.name}</span>
            </div>
            <div>
              <span>
                <b>City : </b>
              </span>
              <span>{user.city}</span>
            </div>
            <div>
              <span>
                <b>Age : </b>
              </span>
              <span>{user.age}</span>
            </div>
            <Button>
              <Link to={`/user/${user.id}`}>Show details</Link>
            </Button>
          </Card>
        );
      })}
    </div>
  );
}

export default Users;
