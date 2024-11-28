import React, { useState } from "react";
import Chart from "../../components/chart/Chart";
import WeekSelector from "../../components/weekSelector/WeekSelector";
import { getMonthFromWeek } from "../../utils/utils";
import './Dashboard.css';  
import ErrorIcon from '@mui/icons-material/Error';
import {useActiveUsers} from "./../../hooks/useActiveUsers";

function Dashboard() {
  const [currentWeek, setCurrentWeek] = useState(7); 
  const { userData, loading, error } = useActiveUsers(currentWeek);

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
  };

  const handlePrevWeek = () => {
    setCurrentWeek((prevWeek) => (prevWeek > 1 ? prevWeek - 1 : 1));
  };

  return (
    <div className="dashboard">
      <div className="chart-container">
        <div className="header-container">
          <h3 className="chart-title">Number of Contacts Per Day</h3>
          <ErrorIcon />
        </div>
        <hr className="chart-divider" />
        <div className="month-display">
          {getMonthFromWeek(currentWeek)}
        </div>
        <div className="chart-content">
          <WeekSelector
            currentWeek={currentWeek}
            handleNextWeek={handleNextWeek}
            handlePrevWeek={handlePrevWeek}
          />
          <div className="chart-wrapper">
            {!loading && !error ? (
              <Chart userData={userData} />
            ) : (
              <p>{loading ? "Loading..." : "Error fetching data"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


