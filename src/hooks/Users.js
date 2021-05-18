import React, { useEffect, useState } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    /*
    // use then catch:
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data;
        setUsers(data);
      })
      .catch((err) => console.log(err));
      */
     // use async await:
      async function getUsers() {
        const result = await axios("https://jsonplaceholder.typicode.com/users")
        setUsers(result.data)
      }
      getUsers()
  });
  return (
    <div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;
