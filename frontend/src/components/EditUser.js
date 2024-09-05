import React, { useState, useEffect, useCallback } from "react";
import { useUpdateHomeUsersMutation } from "../redux/homeSlice";
import { useGetUsersByHomeQuery } from "../redux/userSlice";

const EditUser = ({ home, users, onClose }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [updateHomeUsers, { isLoading }] = useUpdateHomeUsersMutation();
  const { data: usersData, refetch } = useGetUsersByHomeQuery(home.home.id);

  useEffect(() => {
    if (usersData && usersData.users_homes) {
      //console.log("Home users:", usersData.users_homes);
      setSelectedUsers(
        usersData.users_homes.map((userHome) => userHome.user.id)
      );
    }
  }, [usersData]);

  useEffect(() => {
    console.log("Selected users updated:", selectedUsers);
  }, [selectedUsers]);

  const handleToggleUser = useCallback((userId) => {
    setSelectedUsers((prev) => {
      const newSelectedUsers = prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId];
      console.log("Updated Selected Users:", newSelectedUsers);
      return newSelectedUsers;
    });
  }, []);

  const handleSave = async () => {
    try {
      await updateHomeUsers({
        homeId: home.home.id,
        userIds: selectedUsers,
      });
      refetch();
      console.log("Save successful, updated users:", selectedUsers);
      onClose(true, selectedUsers);
    } catch (err) {
      console.error("Failed to save users:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modify Users for: {home.home.street_address}</h2>

        {users.map((user) => (
          <div key={user.id}>
            <input
              type="checkbox"
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleToggleUser(user.id)}
            />
            {user.username}
          </div>
        ))}
        <button
          onClick={() => onClose(false)}
          style={{ backgroundColor: "grey", color: "white" }}
        >
          Cancel
        </button>
        <button onClick={handleSave} disabled={selectedUsers.length === 0}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUser;
