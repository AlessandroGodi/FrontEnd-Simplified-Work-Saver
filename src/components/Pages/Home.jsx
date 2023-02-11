import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User";

function Home() {
  const [users, setUsers] = useState({});

  async function main() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      main();
    }, 500);
  }, []);
  return (
    <div>
      {users.map((user) => {
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      })}
    </div>
  );
}

export default Home;
