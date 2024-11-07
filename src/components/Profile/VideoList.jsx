import { useState } from 'react';
import UploadVideoModal from '../Video/UploadVideoModal';

const VideoList = () => {
  const [showModal, setShowModal] = useState(false);
  
  const videos = [
    {
      videoFile: "https://res.cloudinary.com/dm3ytjedm/video/upload/v1730950185/louso8ynwqmb5essnz0r.mkv",
      thumbnail: "/public/temp/kubernetes-vs-docker.png",
      title: "Docker vs Kubernetes",
      description: "Good video",
      duration: 0,
      views: 0,
      isPublished: true,
      owner: "672b8cb816603694164402ab",
      createdAt: "2024-11-07T03:29:46.440Z",
    },
    // add more videos as needed
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">My Videos</h2>
      <p className="mt-2 text-gray-600">Your uploaded videos will appear here.</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.title} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={video.thumbnail} alt={video.title} className="rounded-lg mb-3" />
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Upload Video
      </button>

      {showModal && <UploadVideoModal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default VideoList;
