import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../../redux/filters/filtersSlice";
import css from "./CarItem.module.css";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.filter.favorites);
  const isFavorite = favorites.includes(car.id);

  const formatAddress = (address) => {
    if (!address) return "";
    return address.split("|").map((part) => part.trim()).join(" | ");
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(car.id));
  };

  const handleReadMore = () => {
    navigate(`/catalog/${car.id}`);
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={car.img || "/default-car-image.jpg"}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
          onError={(e) => (e.target.src = "/default-car-image.jpg")}
        />
        <button
          className={css.favouriteIcon}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FaHeart color="#3470FF" size={20} /> : <FaRegHeart color="#fff" size={20} />}
        </button>
      </div>

      <div className={css.container}>
        <div className={css.header}>
          <div className={css.titleWrapper}>
            <h3 className={css.title}>
              {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
            </h3>
            <span className={css.price}>${car.rentalPrice}</span>
          </div>
        </div>

        {/* <p className={css.meta}>{formatAddress(car.address)}</p>

        <p className={css.specs}>
          {car.type} | {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
        </p> */}
<div  className={css.dopinfo}>
<ul className={css.info}>
            <li>
              {car.address.split(' ').slice(3).join(' | ').replace(',', '')} |
            </li>
            <li>&nbsp;{car.rentalCompany} |</li>
          </ul>
          <ul  className={css.info}>
            <li>{car.type} |</li>
            <li>
              &nbsp;
              {`${String(car.mileage)[0]} ${String(car.mileage).slice(1)}`}{' '}
            </li>
          </ul>
          </div>

        <button className={css.button} onClick={handleReadMore}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default CarItem;
