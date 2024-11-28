import { useState, useEffect } from "react";
import { fetchActiveUsers } from "../firebase/userActivityService";

const useActiveUsers = (week) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsersData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchActiveUsers(week); 
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsersData();
  }, [week]);

  return { userData, loading, error };
};

export { useActiveUsers };
