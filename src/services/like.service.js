import axiosInstance from '../api/axiosInstance.js';


// toggle video like
export const postToggleVideoLike = async () => {
    return await axiosInstance.get('/api/v1/likes/toggle/v/:videoId');
};
// toggle comment like
export const postToggleCommentLike = async () => {
    return await axiosInstance.get('/api/v1/likes//toggle/c/:commentId');
};
// toggle tweet like
export const postToggleTweetLike = async () => {
    return await axiosInstance.get('/api/v1/likes//toggle/t/:tweetId');
};
// get video like
export const getVideoLike = async () => {
    return await axiosInstance.get('/api/v1/likes/videos');
};