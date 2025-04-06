import css from './CarList.module.css';
import CarItem from '../CarItem/CarItem.jsx';
import Loader from '../Loader/Loader.jsx';




const CarsList = ({ cars = [], isLoading = false }) => {
  if (isLoading && cars.length === 0) {
    return (
      <div className={css.loading}>
        <Loader />
      </div>
    );
  }

  if (!cars || cars.length === 0) {
    return <div>Cars are not found</div>;
  }

  return (
    // <div className={css.list}>
    //   {cars.map(car => (
    //     <CarItem key={car.id} car={car} />
    //   ))}
    // </div>
   
<>
      <ul className={css.list}>
        {cars.map(car => (
          <li  key={car.id}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>

    
   </>
  );
};

export default CarsList;