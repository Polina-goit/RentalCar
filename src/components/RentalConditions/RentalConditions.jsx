import { IoCheckmarkCircleOutline } from "react-icons/io5";
import css from './RentalConditions.module.css';

const RentalConditions = ({ conditions }) => {
  return (
    <div className={css.container}>
      <h4 className={css.title}>Rental Conditions:</h4>
      <ul className={css.conditionList}>
        {conditions.map((item, index) => (
          <li key={index} className={css.conditionItem}>
            <IoCheckmarkCircleOutline style={{ marginRight: 8 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalConditions;

