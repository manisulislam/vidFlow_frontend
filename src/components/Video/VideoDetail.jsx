import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance.js';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editContent, setEditContent] = useState('');

  console.log(id)
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/videos/${id}`);
        console.log(response)
        console.log(response.data.data)
        setVideo(response.data.data);
        setComments(response.data.comments || []);
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/api/v1/comments/${id}`, {
        content: newComment,
      });
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleEditComment = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditContent(content);
  };

  const handleUpdateComment = async (e, commentId) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch(`/api/v1/comments/c/${commentId}`, {
        content: editContent,
      });
      setComments(comments.map(comment => 
        comment._id === commentId ? { ...comment, content: response.data.content } : comment
      ));
      setEditingCommentId(null);
      setEditContent('');
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axiosInstance.delete(`/api/v1/comments/c/${commentId}`);
      setComments(comments.filter(comment => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="text-center mt-6">
        <p>Video not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="relative w-full h-0 overflow-hidden pb-[56.25%] rounded-lg shadow-lg mb-4">
        <video
          controls
          className="absolute top-0 left-0 w-full h-full"
          src={video.videoFile}
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{video.title}</h2>
      <p className="text-gray-600 mb-4">{video.description}</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
        <div className="space-y-4 mt-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="bg-gray-100 p-3 rounded-lg">
                {editingCommentId === comment._id ? (
                  <form onSubmit={(e) => handleUpdateComment(e, comment._id)} className="space-y-2">
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-2"
                      rows="3"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingCommentId(null)}
                      className="bg-gray-300 text-gray-700 px-4 py-1 rounded-lg ml-2 hover:bg-gray-400 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <p className="text-gray-800">{comment.content}</p>
                    <small className="text-gray-500">
                      {new Date(comment.createdAt).toLocaleString()}
                    </small>
                    <div className="flex space-x-3 mt-2">
                      <button
                        onClick={() => handleEditComment(comment._id, comment.content)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>

      <form onSubmit={handleAddComment} className="flex flex-col space-y-3">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2"
          rows="3"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="self-end bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default VideoDetail;
