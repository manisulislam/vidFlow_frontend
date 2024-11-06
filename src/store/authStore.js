import create from 'zustand';
import { persist } from 'zustand/middleware';
import { loginUser, logoutUser, signUpUser } from '../services/authService.js';

const useAuthStore = create(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,

            // Sign Up
            signUp: async (userData) => {
                
                    const response = await signUpUser(userData);
                    return response;
                
            },

            // Log In
            login: async (credentials) => {
                
                    const response = await loginUser(credentials);
                    set({ isAuthenticated: true, user: response.data.user });
                
            },

            // Log Out
            logout: async () => {
                await logoutUser();
                set({ isAuthenticated: false, user: null });
            },
        }),
        // {
        //     name: 'auth-storage',
        //     getStorage: () => sessionStorage,
        // }
    )
);

export default useAuthStore;
