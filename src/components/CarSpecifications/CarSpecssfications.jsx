import { IoSettingsOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import css from "./CarSpecifications.module.css";

const CarSpecifications = ({ car }) => {
  return (
    <div className={css.container}>
      <h4 className={css.title}>Car Specifications:</h4>

      <div className={css.specsList}>
        <div className={css.specItem}>
          <IoCalendarOutline style={{ marginRight: 8 }} />
          <strong>Year:</strong> {car.year}
        </div>
        <div className={css.specItem}>
          <FaCar style={{ marginRight: 8 }} />
          <strong>Type:</strong> {car.type}
        </div>
        <div className={css.specItem}>
          <BsFuelPump style={{ marginRight: 8 }} />
          <strong>Fuel Consumption:</strong> {car.fuelConsumption} L/100km
        </div>
        <div className={css.specItem}>
          <IoSettingsOutline style={{ marginRight: 8 }} />
          <strong>Engine Size:</strong> {car.engineSize}
        </div>
      </div>
    </div>
  );
};

export default CarSpecifications;
