import React from "react";
import { useGetUsersQuery } from "../redux/userSlice";

const UserDropdown = ({ onSelectUser }) => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUsersQuery();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error}</p>}
      {isSuccess && (
        <select onChange={(e) => onSelectUser(e.target.value)}>
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default UserDropdown;
