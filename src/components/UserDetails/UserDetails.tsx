import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const { userId } = params;

  return <div>Details of user {userId}</div>;
};

export default UserDetails;
