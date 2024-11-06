import axiosInstance from '../api/axiosInstance.js';

// Sign Up User
export const signUpUser = async (userData) => {
    return await axiosInstance.post('/api/v1/users/register', userData);
};

// Log In User
export const loginUser = async (data) => {
    return await axiosInstance.post('/api/v1/users/login', data);
};

// Log Out User
export const logoutUser = async () => {
    await axiosInstance.post('/api/v1/users/logout');
    window.location.href = '/login'; // Redirect to login page after logout
};
