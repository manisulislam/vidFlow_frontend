
import VideoCard from './VideoCard';

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
    {Array.from({ length: 9 }).map((_, index) => (
      <VideoCard
        key={index}
        title={`Video Title ${index + 1}`}
        description="Video Description..."
      />
    ))}
  </div>
  )
}

export default VideoGrid