import { useState } from 'react';
import {publishVideo} from "../services/videoService.js"



const useUploadVideo = () => {
  const [isLoading, setIsLoading] = useState(false);


  // Function to get the token from cookies
  const getAccessTokenFromCookies = () => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
    return cookies['accessToken'];
  };


  const uploadVideo = async (data) => {
    setIsLoading(true);
    // Prepare form data
    const formData = new FormData();
    formData.append('videoFile', data.videoFile);  // File input gives an array
    formData.append('thumbnail', data.thumbnail);
    formData.append('title', data.title);
    formData.append('description', data.description);


    try {
      const response = await publishVideo( formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${getAccessTokenFromCookies()}`
        },
      });
      
      if (response.status === 201) {
        alert('Video uploaded successfully!');
      } else {
        alert('Upload failed. Please try again.');
      }
      
    } catch (error) {
      alert('Upload failed. Please try again.');
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, uploadVideo };
};

export default useUploadVideo;
