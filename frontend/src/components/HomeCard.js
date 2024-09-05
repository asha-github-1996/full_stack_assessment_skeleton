import React, { useState } from "react";
import EditUser from "./EditUser";

const HomeCard = ({ home, users, refetchHomes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(users);

  const handleEditUsers = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (didUpdate) => {
    setIsModalOpen(false);
    if (didUpdate) {
      refetchHomes(); // Refetch homes to reflect changes
    }
  };

  return (
    // dummy data for now

    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{home.home.street_address}</h2>
        <p className="card-text">List Price: {home.home.list_price}</p>
        <p className="card-text">State: {home.home.state}</p>
        <p className="card-text">Zip: {home.home.zip}</p>
        <p className="card-text">Sqft: {home.home.sqft}</p>
        <p className="card-text">Beds: {home.home.beds}</p>
        <p className="card-text">Baths: {home.home.baths}</p>
        <button className="btn" onClick={handleEditUsers}>
          Edit Users
        </button>
      </div>

      {isModalOpen && (
        <EditUser home={home} users={users} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default HomeCard;
