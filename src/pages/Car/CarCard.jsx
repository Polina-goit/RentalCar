import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import CarCardHeader from "../../components/CarCardHeader/CarCardHeader.jsx";
import RentalConditions from "../../components/RentalConditions/RentalConditions.jsx";
import CarSpecifications from "../../components/CarSpecifications/CarSpecssfications.jsx";
import AccessoriesList from "../../components/AccessoriesList/AccessoriesList.jsx";

import css from "./CarCard.module.css";
import BookUserForm from "../../components/BookUserForm/BookUserForm.jsx";
import { fetchCarDetails } from "../../redux/cars/operations.js";

const CarCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCarData = async () => {
      try {
        setIsLoading(true);
        const response = await dispatch(fetchCarDetails(id));
        setCar(response.payload);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load car details");
      } finally {
        setIsLoading(false);
      }
    };

    loadCarData();
  }, [dispatch, id]);

  if (isLoading)
    return <div className={css.loader}>Loading...</div>;

  if (error)
    return <div className={css.error}>Error: {error}</div>;

  if (!car)
    return <div className={css.noCar}>Car not found</div>;

  return (
    <div className={css.container}>
      <div className={css.imageSection}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.carImage}
          />
        <BookUserForm carId={car.id} rentalPrice={car.rentalPrice} />
      </div>

      <div className={css.detailsSection}>
        <CarCardHeader car={car} />
        <RentalConditions conditions={car.rentalConditions} />
        <CarSpecifications car={car} />
        <AccessoriesList
          accessories={car.accessories}
          functionalities={car.functionalities}
        />
      </div>
    </div>
  );
};

export default CarCard;
