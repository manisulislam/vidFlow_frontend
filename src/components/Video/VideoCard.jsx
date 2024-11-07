

const VideoCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition hover:scale-105">
    <div className="h-40 bg-gray-300 mb-4 rounded-md"></div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
  )
}

export default VideoCard