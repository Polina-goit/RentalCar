import React from 'react';
import css from './LoadMoreBtn.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button type="primary" onClick={onClick} className={css.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
