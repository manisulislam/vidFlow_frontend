import axiosInstance from '../api/axiosInstance.js';

import {getAccessTokenFromCookies} from "../utility/getAccessTokenFromCookies.js"

// /api/v1/subscriptions

// get Subscribed Channels
export const getSubscribedChannels = async () => {
    return await axiosInstance.get('/api/v1/subscriptions/c/:channelId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

// post method toggle Subscription
export const toggleSubscription = async () => {
    return await axiosInstance.post('/api/v1/subscriptions/c/:channelId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};

// get user channel subscriber

export const getUserChannelSubscribers = async () => {
    return await axiosInstance.get('/api/v1/subscriptions/u/:subscriberId',{
        headers: {
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          },
    });
};
