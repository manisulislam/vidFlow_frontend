import axiosInstance from '../api/axiosInstance.js';

import {getAccessTokenFromCookies} from "../utility/getAccessTokenFromCookies.js"


// post play list
export const postPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

// get play list
export const GetPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/:playlistId');
};
// patch play list
export const patchPlayList = async () => {
    return await axiosInstance.patch('/api/v1/playlist/:playlistId');
};
// delete play list
export const deletePlayList = async () => {
    return await axiosInstance.delete('/api/v1/playlist/:playlistId');
};


// add video to playlist
export const addVideoToPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/add/:videoId/:playlistId');
};
// remove video from playlist
export const removeVideoFromPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/remove/:videoId/:playlistId');
};
// get user playlist
export const getUserPlayList = async () => {
    return await axiosInstance.post('/api/v1/playlist/user/:userId');
};