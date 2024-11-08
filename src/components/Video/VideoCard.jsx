
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoCard = ({ video }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover"
        src={video.thumbnail}
        alt={video.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
        <p className="text-sm text-gray-600 mt-2 truncate">{video.description}</p>
        <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
          <span>{video.duration ? `${video.duration} mins` : 'Duration unknown'}</span>
          <span>{video.views} views</span>
        </div>
        <Link to={`/home/video/video/${video._id}`}>
          
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
            View Video
          </button>
        </Link>
      </div>
    </div>
  );
};

// Adding prop types validation for `video` object
VideoCard.propTypes = {
  video: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default VideoCard;
