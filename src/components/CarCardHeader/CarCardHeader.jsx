import { IoLocationOutline } from "react-icons/io5";
import css from "./CarCardHeader.module.css";

const CarCardHeader = ({ car }) => {
  const formatAddress = (address) => {
    if (!address) return "";
    const parts = address.split(",").map((part) => part.trim());
    return parts.slice(-2).join(", ");
  };

  return (
    <div className={css.header}>
      <div className={css.titleContainer}>
        <h2 className={css.title}>
          {car.brand} {car.model}, {car.year}
        </h2>
        <span className={css.id}>Id: {car.id.slice(0, 4)}</span>
      </div>
      
      <div className={css.subtitle}>
        <p className={css.location}>
          <IoLocationOutline /> {formatAddress(car.address)}
        </p>
        <p className={css.mileage}>
          Mileage: {car.mileage.toLocaleString()} km
        </p>
      </div>

      <h2 className={css.price}>${car.rentalPrice}</h2>

      {car.description && <p className={css.description}>{car.description}</p>}
    </div>
  );
};

export default CarCardHeader;
