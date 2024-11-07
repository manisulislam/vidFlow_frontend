import axiosInstance from '../api/axiosInstance.js';

// publish video
export const publishVideo = async (userData) => {
    return await axiosInstance.post('/api/v1/videos/', userData);
};
