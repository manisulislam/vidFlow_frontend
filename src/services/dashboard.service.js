import axiosInstance from '../api/axiosInstance.js';

// get stats
export const getStats = async () => {
    return await axiosInstance.get('/api/v1/dashboard/stats');
};

// get channel videos
export const getChannelVideos = async () => {
    return await axiosInstance.get('/api/v1/dashboard/videos');
};

