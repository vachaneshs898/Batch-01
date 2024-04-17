import { users } from "componants/Data/users";
import Card from "componants/UI/Card";
import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const user = users.filter((user) => user.id === Number(id))[0]
 
  return (
          <Card>
            <div>{user.name}</div>
          </Card>
        )
}

export default UserDetail;
