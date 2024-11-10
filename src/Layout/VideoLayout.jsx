

import VideoSidebar from '../components/Video/VideoSidebar';
import { Outlet } from 'react-router-dom';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';



const VideoLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Left Sidebar */}
      <VideoSidebar />

      {/* Right Content Area */}
      <main className="w-4/5 p-6 space-y-6 overflow-y-scroll">
        
        <WelcomeMessage/>
        
        <Outlet /> 
        
      </main>
    </div>
  );
};

export default VideoLayout;
