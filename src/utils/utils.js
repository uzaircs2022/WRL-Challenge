import { Timestamp } from "firebase/firestore";

export const getWeekRange = (weekOffset = 0) => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  const startOfWeek = new Date(
    startOfYear.setDate(startOfYear.getDate() + weekOffset * 7 - startOfYear.getDay())
  );

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  startOfWeek.setHours(0, 0, 0, 0); 
  endOfWeek.setHours(23, 59, 59, 999); 

  return {
    start: Timestamp.fromDate(startOfWeek),
    end: Timestamp.fromDate(endOfWeek),
  };
};

export const getMonthFromWeek = (week) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const monthIndex = Math.floor((week - 1) / 4); 
    return monthNames[monthIndex];
  };