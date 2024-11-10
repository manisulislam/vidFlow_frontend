import  { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useStore } from 'zustand';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/solid';
import { postPlayList } from "../../services/playlist.service.js"


const Playlist = () => {
  // const [playlists, setPlaylists] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  // const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  // const [videoToAdd, setVideoToAdd] = useState('');
  
  // const navigate = useNavigate();
 
  

  // create playlist
  const createPlaylist = async (data) => {

    const userData={
      "name": data.name,
      "description": data.description
    }
    console.log(userData)
    try {
      await postPlayList('/api/v1/playlist/', userData );
     
      setShowCreateModal(false);
     
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };



 
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Playlists</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          <PlusIcon className="w-5 h-5 inline-block mr-2" /> Create Playlist
        </button>
      </div>

     

      {/* Create Playlist Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create Playlist</h2>

            <form onSubmit={handleSubmit(createPlaylist)}>
              <input
                type="text"
                {...register("name", { required: "Playlist name is required" })}
                placeholder="Playlist Name"
                className="border border-gray-300 p-2 rounded-md w-full mb-4"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <textarea
                {...register("description", { required: "Description is required" })}
                placeholder="Playlist Description"
                className="border border-gray-300 p-2 rounded-md w-full mb-4 resize-none"
                rows="3"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    reset();
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
