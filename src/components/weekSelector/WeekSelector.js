import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import './WeekSelector.css';  // Import the CSS file

function WeekSelector({ currentWeek, handleNextWeek, handlePrevWeek }) {
  return (
    <div className="week-selector">
      <button onClick={handlePrevWeek} className="week-button">
        <ArrowLeftIcon className="week-icon" />
      </button>
      <span className="week-text">Week {currentWeek}</span>
      <button onClick={handleNextWeek} className="week-button">
        <ArrowRightIcon className="week-icon" />
      </button>
    </div>
  );
}

export default WeekSelector;
