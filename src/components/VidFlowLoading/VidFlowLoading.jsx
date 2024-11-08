

function VidFlowLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-4xl font-bold text-white flex space-x-2">
        {['V', 'i', 'd', 'F', 'l', 'o', 'w'].map((letter, index) => (
          <span
            key={index}
            className={`animate-pulse text-indigo-400 ${
              index % 2 === 0 ? 'animation-delay' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default VidFlowLoading;
