
import { useForm } from 'react-hook-form';
import useUploadVideo from '../../hooks/useUploadVideo.js';
import PropTypes from 'prop-types';



const UploadVideoModal = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();
  const { isLoading, uploadVideo } = useUploadVideo();

  const onSubmit = (data) => {
    console.log(data);
    console.log('videoFile:', data.videoFile[0]); // Confirm this is not undefined
    console.log('thumbnail:', data.thumbnail[0]);
    console.log('videoFile:', data.videoFile); // Confirm this is not undefined
    console.log('thumbnail:', data.thumbnail);
    uploadVideo(data);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500">
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload New Video</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-blue-600 font-medium mb-1" >videoFile</label>
            <input
              type="file"
              {...register("videoFile")}
              placeholder="videoFile"
              className="w-full px-3 py-2 mb-3 border rounded-lg"
            />
          </div>
          
          <div>
            <label className="block text-blue-600 font-medium mb-1" >Thumbnail</label>
            <input
              type="file"
              {...register("thumbnail")}
              placeholder="thumbnail"
              className="w-full px-3 py-2 mb-3 border rounded-lg"
            />
          </div>
          
          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="w-full px-3 py-2 mb-3 border rounded-lg"
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full px-3 py-2 mb-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    </div>
  );
};


// Add PropTypes validation for closeModal prop
UploadVideoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default UploadVideoModal;
