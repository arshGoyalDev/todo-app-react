import React from 'react';
import './styles/Filters.css';


let Filters = () => {
  return (
    <div className="filters">
      <button className='active-filter filter-btn--all'>All</button>
      <button className='filter-btn--active'>Active</button>
      <button className='filter-btn--completed'>Completed</button>
    </div>
  );
}


export default Filters;
