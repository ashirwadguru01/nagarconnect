import { useState, useEffect } from 'react';

export const useProfileVisits = (userId: string) => {
  const [visits, setVisits] = useState(0);
  const [lastVisited, setLastVisited] = useState<Date | null>(null);

  useEffect(() => {
    // Get current visits from localStorage
    const storedVisits = localStorage.getItem(`profile_visits_${userId}`);
    const storedLastVisited = localStorage.getItem(`last_visited_${userId}`);
    
    if (storedVisits) {
      setVisits(parseInt(storedVisits, 10));
    }
    
    if (storedLastVisited) {
      setLastVisited(new Date(storedLastVisited));
    }
  }, [userId]);

  const incrementVisits = () => {
    const newVisitCount = visits + 1;
    const now = new Date();
    
    setVisits(newVisitCount);
    setLastVisited(now);
    
    // Store in localStorage
    localStorage.setItem(`profile_visits_${userId}`, newVisitCount.toString());
    localStorage.setItem(`last_visited_${userId}`, now.toISOString());
  };

  const resetVisits = () => {
    setVisits(0);
    setLastVisited(null);
    localStorage.removeItem(`profile_visits_${userId}`);
    localStorage.removeItem(`last_visited_${userId}`);
  };

  return {
    visits,
    lastVisited,
    incrementVisits,
    resetVisits
  };
};