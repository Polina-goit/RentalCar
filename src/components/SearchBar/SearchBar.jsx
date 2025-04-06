import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPriceFilter,
  setMinMileageFilter,
  setMaxMileageFilter,
  setPage,
  setBrandFilter,
} from "../../redux/filters/filtersSlice.js";
import { fetchBrands } from "../../redux/cars/operations";
import css from "./SearchBar.module.css";

const priceOptions = [30, 40, 50, 60, 70, 80];

const SearchBar = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const dispatch = useDispatch();
  const brands = useSelector((state) => state.cars.brands);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const filters = useSelector((state) => state.filter.filters);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [brands.length, dispatch]);

  useEffect(() => {
    setFormData({
      brand: filters.brand || "",
      price: filters.rentalPrice || "",
      mileageFrom: filters.minMileage || "",
      mileageTo: filters.maxMileage || "",
    });
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBrandFilter(formData.brand || ""));
    dispatch(setPriceFilter(formData.price || ""));
    dispatch(setMinMileageFilter(formData.mileageFrom || ""));
    dispatch(setMaxMileageFilter(formData.mileageTo || ""));
    dispatch(setPage(1));

    if (onSearch) {
      onSearch(formData);
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <div className={css.row}>
          {/* Brand Selector */}
          <div className={css.col}>
            <label htmlFor="brand">Car brand</label>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
              disabled={isLoading}
              className={css.select}
            >
              <option value="">Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Price Selector */}
          <div className={css.col}>
            <label htmlFor="price">Price / 1 hour</label>
            <select
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className={css.select}
            >
              <option value="">Choose a price</option>
              {priceOptions.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>

          {/* Mileage Inputs */}
          <div className={css.col}>
            <label htmlFor="mileageFrom">Car mileage / km</label>
            <div className={css.mileageInputs}>
              <div className={css.inputWrapper}>
                <span className={css.inputLabel}>From</span>
                <input
                  type="number"
                  id="mileageFrom"
                  name="mileageFrom"
                  value={formData.mileageFrom}
                  onChange={(e) =>
                    setFormData({ ...formData, mileageFrom: e.target.value })
                  }
                  min="0"
                  className={css.input}
                />
              </div>
              <div className={css.inputWrapper}>
                <span className={css.inputLabel}>To</span>
                <input
                  type="number"
                  id="mileageTo"
                  name="mileageTo"
                  value={formData.mileageTo}
                  onChange={(e) =>
                    setFormData({ ...formData, mileageTo: e.target.value })
                  }
                  min="0"
                  className={css.input}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className={css.col}>
            <button type="submit" className={css.submitButton}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;