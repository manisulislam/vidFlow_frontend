import { useEffect, useState } from 'react';
import { getVideo } from '../../services/videoService.js'; // Adjust the path as needed
import VideoCard from './VideoCard';
import PaginationBar from "./PaginationBar"
import VidFlowLoading from '../VidFlowLoading/VidFlowLoading.jsx';


const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideo({
          headers: {
            
            'Authorization': `Bearer ${getAccessTokenFromCookies()}`
          }});
        console.log(response)
       
        setVideos(response.data.data.docs); // Ensure this matches the data structure from your API
        

        
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <VidFlowLoading/>
    );
  }

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))
      ) : (
        <div className="col-span-full text-center">No videos available</div>
      )}
     
    </div>
     <PaginationBar />
    </>
    
  );
};

export default AllVideos;
