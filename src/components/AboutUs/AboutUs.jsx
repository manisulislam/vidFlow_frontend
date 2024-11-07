import { CloudUploadIcon, FolderIcon, ShareIcon } from '@heroicons/react/outline'; // Import relevant icons
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="mt-32 bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-blue-800 mb-8">
          About VidFlow
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          VidFlow is a cutting-edge Video Management System designed to help you manage, upload, and share your videos effortlessly. With powerful features and a user-friendly interface, VidFlow is the perfect solution for content creators, educators, businesses, and anyone who wants to share their videos with the world.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Video Upload */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-b-4 hover:border-blue-600 transition-all duration-300 transform hover:translate-y-[-6px]">
            <div className="flex items-center mb-4">
              <CloudUploadIcon className="h-8 w-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold text-blue-800">Easy Video Upload</h3>
            </div>
            <p className="text-gray-600">
              With VidFlow, uploading videos is a breeze. Simply drag and drop your videos to upload them in seconds.
            </p>
          </div>
          
          {/* Organize and Categorize */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-b-4 hover:border-blue-600 transition-all duration-300 transform hover:translate-y-[-6px]">
            <div className="flex items-center mb-4">
              <FolderIcon className="h-8 w-8 text-yellow-500 mr-4" />
              <h3 className="text-2xl font-semibold text-blue-800">Organize and Categorize</h3>
            </div>
            <p className="text-gray-600">
              Group your videos into playlists, create categories, and easily manage your video library.
            </p>
          </div>
          
          {/* Seamless Sharing */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-b-4 hover:border-blue-600 transition-all duration-300 transform hover:translate-y-[-6px]">
            <div className="flex items-center mb-4">
              <ShareIcon className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-blue-800">Seamless Sharing</h3>
            </div>
            <p className="text-gray-600">
              Share your videos with friends, colleagues, or the world through VidFlow`s easy sharing options.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Get Started with VidFlow Today!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Ready to organize and share your videos? Join VidFlow and start managing your videos like never before.
          </p>
          <Link
            to="/home/video"
            className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300"
          >
            Start Using VidFlow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
