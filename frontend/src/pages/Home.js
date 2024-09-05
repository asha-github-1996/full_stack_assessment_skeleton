import React, { useState } from "react";
import UserDropdown from "../components/UserDropdown";
import HomeCard from "../components/HomeCard";
import { useGetHomesQuery } from "../redux/homeSlice";
import { useGetUsersQuery } from "../redux/userSlice";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    data: homes,
    isLoading: isLoadingHomes,
    isError: isErrorHomes,
    isSuccess: isSuccessHomes,
    error: errorHomes,
    refetch: refetchHomes,
  } = useGetHomesQuery(selectedUser, { skip: !selectedUser });

  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    isSuccess: isSuccessUsers,
    error: errorUsers,
  } = useGetUsersQuery(); // Fetch all users

  //console.log(users);

  return (
    <div>
      {/* <p>
        Select User : <UserDropdown onSelectUser={setSelectedUser} />
      </p> */}

      <div className="select-user-container">
        <p>Select User :</p>
        <UserDropdown onSelectUser={setSelectedUser} />
      </div>

      {isLoadingHomes && <p>Loading homes...</p>}
      {isLoadingUsers && <p>Loading users...</p>}

      <div className="homes-list">
        {isErrorHomes && <p>Error loading homes: {errorHomes}</p>}
        {isErrorUsers && <p>Error loading users: {errorUsers}</p>}
        {isSuccessHomes && isSuccessUsers && (
          <div className="card-container">
            {homes.map((home) => (
              <HomeCard
                key={home.id}
                home={home}
                users={users}
                refetchHomes={refetchHomes}
              />
            ))}
          </div>
        )}
      </div>

      {/* <HomeCard /> */}
      {/* <EditUser /> */}
    </div>
  );
};

export default Home;
