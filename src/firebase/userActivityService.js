import { db } from "../firebase-config"; 
import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { getWeekRange } from "../utils/utils";

export const fetchActiveUsers = async (weekNumber) => {
  const { start, end } = getWeekRange(weekNumber);
  try {
    const usersQuery = query(
      collection(db, "LogBookContact"),
      where("timestamp", ">=", start),
      where("timestamp", "<=", end)
    );

    const querySnapshot = await getDocs(usersQuery);
    const userActivity = {};

    if (querySnapshot.empty) {
      console.log("No Users");
      return [];
    }
    
    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      
      if (data.timestamp instanceof Timestamp) {
        const date = data.timestamp.toDate();
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`; 

        if (userActivity[formattedDate]) {
          userActivity[formattedDate]++;
        } else {
          userActivity[formattedDate] = 1;
        }
      }
    });

    return Object.entries(userActivity).map(([date, users]) => ({ date, users }));
  } catch (error) {
    console.log("Error while fetching data from Firebase", error);
    throw new Error("Failed to fetch data");
  }
};



