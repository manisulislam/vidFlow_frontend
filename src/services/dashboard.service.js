import axiosInstance from '../api/axiosInstance.js';
import {getAccessTokenFromCookies} from "../utility/getAccessTokenFromCookies.js"


// get stats
export const getStats = async () => {
    return await axiosInstance.get('/api/v1/dashboard/stats',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

// get channel videos
export const getChannelVideos = async () => {
    return await axiosInstance.get('/api/v1/dashboard/videos',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

