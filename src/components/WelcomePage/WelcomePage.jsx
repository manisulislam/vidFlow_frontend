import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/video/bgVideo.mp4"; // Path to your video file
import AboutUs from "../AboutUs/AboutUs";

const WelcomePage = () => {
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Text Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Our VidFlow Video Management System!
        </h1>
        <p className="text-lg text-white mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Manage, upload, and share your videos seamlessly.
        </p>

        <Link to="/home/video">
          <button className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300 animate__animated animate__fadeIn animate__delay-3s">
            Get Started
          </button>
        </Link>
      </div>
    </div>

    {/* about us */}
    <AboutUs/>
    </>
    
  );
};

export default WelcomePage;
