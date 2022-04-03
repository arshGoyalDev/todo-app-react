import { useState } from "react";

import { filterTasks } from "../utils/filter";

import "./Styles/Filters.css";

const Filters = ({ setFilter }) => {
  const [filter, updateFilter] = useState("all");

  const clickHandler = (e) => {
    updateFilter(e.target.value);
    filterTasks(e.target.value, setFilter);
  };

  return (
    <div className="filters">
      <button
        value="all"
        className={`filter-btn--all ${filter === "all" ? "active-filter" : ""}`}
        onClick={clickHandler}
      >
        All
      </button>
      <button
        value="active"
        className={`filter-btn--active ${
          filter === "active" ? "active-filter" : ""
        }`}
        onClick={clickHandler}
      >
        Active
      </button>
      <button
        value="completed"
        className={`filter-btn--completed ${
          filter === "completed" ? "active-filter" : ""
        }`}
        onClick={clickHandler}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
