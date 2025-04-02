import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/carSlice.js";
import CarCard from "../../pages/Car/CarCard.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const Catalog = () => {
  const dispatch = useDispatch();
  
  // Отримуємо список авто з Redux-стану
  const { cars: carList, status } = useSelector((state) => state.cars);

  // Виконуємо запит при завантаженні сторінки
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // Лог у консоль для перевірки
  console.log("Cars from Redux:", carList, Array.isArray(carList?.cars));

  // Обробка можливих станів завантаження
  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "failed") return <p className="text-center text-red-500">It's mistake download...</p>;
  if (!carList?.cars || !Array.isArray(carList?.cars)) return <p>No cars in list</p>;

  return (
    <div>
    
      <h1>Каталог автомобілів</h1>

      
      <div>
        {carList.cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;