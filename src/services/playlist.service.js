import axiosInstance from '../api/axiosInstance.js';

import {getAccessTokenFromCookies} from "../utility/getAccessTokenFromCookies.js"
// const getAccessTokenFromCookies = () => {
//     const cookieString = document.cookie;
//     const cookies = cookieString.split('; ').reduce((acc, cookie) => {
//       const [name, value] = cookie.split('=');
//       acc[name] = value;
//       return acc;
//     }, {});
//     return cookies['accessToken'];
//   };

// post play list
export const postPlayList = async (userData) => {
    return await axiosInstance.post('/api/v1/playlist/',userData, {
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`,
            'Content-Type': 'application/json',
          },
    });
};

// get play list
export const GetPlayList = async (playlistId) => {
    return await axiosInstance.post(`/api/v1/playlist/${playlistId}`,{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};


// patch play list
export const patchPlayList = async () => {
    return await axiosInstance.patch('/api/v1/playlist/:playlistId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};
// delete play list
export const deletePlayList = async () => {
    return await axiosInstance.delete('/api/v1/playlist/:playlistId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};


// add video to playlist
export const addVideoToPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/add/:videoId/:playlistId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};
// remove video from playlist
export const removeVideoFromPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/remove/:videoId/:playlistId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};
// get user playlist
export const getUserPlayList = async (userId) => {
    return await axiosInstance.get(`/api/v1/playlist/user/${userId}`,{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};