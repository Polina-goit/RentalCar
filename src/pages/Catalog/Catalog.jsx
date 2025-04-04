import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CarList from '../../components/CarList/CarList.jsx';
import LoadMoreBtn from '../../components/LoadMoreButton/LoadMoreButton.jsx';

import { fetchCars } from '../../redux/cars/operations.js';
import {
  selectCars,
  selectIsLoading,
  selectError,
  selectHasMore,
  selectCurrentPage,
} from '../../redux/cars/carsSelectors.js';
import { resetCarsState } from '../../redux/cars/carSlice.js';
import css from './Catalog.module.css';

import { selectFilters } from '../../redux/filters/filtersSelectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const currentPage = useSelector(selectCurrentPage);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: currentPage + 1, filters }));
  };

  const handleSearch = filters => {
    dispatch(resetCarsState());
    dispatch(fetchCars({ page: 1, filters }));
  };

  return (
    <div className={css.container}>
        <SearchBar onSearch={handleSearch} />

      <CarList cars={cars} isLoading={isLoading} />

      {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}

      {isLoading && <Loader />}
    </div>
  );
};

export default Catalog;