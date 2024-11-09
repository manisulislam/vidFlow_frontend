import axiosInstance from '../api/axiosInstance.js';

import {getAccessTokenFromCookies} from "../utility/getAccessTokenFromCookies.js"

// /api/v1/tweets

// create tweet
export const createTweet = async () => {
    return await axiosInstance.post('/api/v1/tweets/',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

// get user twwet
export const getUserTweet = async () => {
    return await axiosInstance.get('/api/v1/tweets/user/:userId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};
// patch user twwet
export const patchUserTweet = async () => {
    return await axiosInstance.patch('/api/v1/tweets/:tweetId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

// delete user twwet
export const deleteUserTweet = async () => {
    return await axiosInstance.delete('/api/v1/tweets/:tweetId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};



