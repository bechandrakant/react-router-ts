import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams?.get("filter") == "active";

  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active users
      </button>
      <button onClick={() => setSearchParams({})}>Reset filter</button>
      <div>{showActiveUsers ? "Active users" : "All users"}</div>
    </div>
  );
};

export default Users;
