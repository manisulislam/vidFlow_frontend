import { PencilIcon } from '@heroicons/react/outline';  // Correct path
import { useState } from 'react';

const ProfileDashboard = () => {
  const user = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: '********',
    fullName: 'John Doe',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(user);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center p-8 bg-gray-50">
      {/* Profile Container */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 bg-indigo-600 text-white">
          {/* Profile Header */}
          <h2 className="text-3xl font-semibold">Profile Dashboard</h2>
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white">
            {/* Avatar */}
            <img
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-6">
          {/* User Info Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">Username</label>
              <span className="text-gray-500">{userInfo.username}</span>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={userInfo.fullName}
                  onChange={handleInputChange}
                  className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <span className="text-gray-500">{userInfo.fullName}</span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <span className="text-gray-500">{userInfo.email}</span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">Password</label>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleInputChange}
                  className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <span className="text-gray-500">********</span>
              )}
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleEditClick}
              className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              <PencilIcon className="w-5 h-5 mr-2" />
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
