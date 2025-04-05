import { FaRegCheckCircle } from "react-icons/fa";
import css from "./AccessoriesList.module.css";

const AccessoriesList = ({ accessories, functionalities }) => {
  const data = [...accessories, ...functionalities];

  return (
    <div className={css.container}>
      <h4 className={css.title}>Accessories and functionalities:</h4>
      {data.length > 0 ? (
        <ul className={css.list}>
          {data.map((item, index) => (
            <li key={index} className={css.listItem}>
              <FaRegCheckCircle className={css.icon} />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.emptyText}>No accessories information</p>
      )}
    </div>
  );
};

export default AccessoriesList;
