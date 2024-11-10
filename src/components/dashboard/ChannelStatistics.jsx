import { useEffect, useState } from 'react';
import { getStats } from "../../services/dashboard.service.js";

const ChannelStatistics = () => {
  const [stats, setStats] = useState({
    totalVideos: 0,
    totalViews: 0,
    totalLikes: 0,
    totalSubscribers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStats('/api/v1/dashboard/stats');
        console.log(response.data.data);
        setStats(response.data.data);
      } catch (error) {
        console.error("Error fetching channel statistics:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-6 lg:p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Channel Statistics</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(stats).map(([key, value], index) => (
          <div
            key={index}
            className="relative p-6 md:p-8 rounded-xl bg-white text-gray-800 text-center shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b from-blue-50 to-blue-100"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-indigo-600">{value}</span>
            <span className="block mt-3 text-base md:text-lg font-semibold text-gray-700 capitalize">
              {key.replace('total', '').replace(/([A-Z])/g, ' $1')}
            </span>
            <div className="absolute inset-0 bg-indigo-600 rounded-xl opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelStatistics;
