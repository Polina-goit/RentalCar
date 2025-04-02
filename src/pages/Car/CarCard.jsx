import React from "react";
const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={car.img || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={car.name}
              />
      <h2 className="text-xl font-bold">{car.brand}</h2>
      {/* <p>Ціна: ${car.price}</p> */}
    </div>
  );
};

export default CarCard;