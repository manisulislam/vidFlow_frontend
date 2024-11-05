

const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
                Welcome to Our VidFlow Video Management System!
            </h1>
            <p className="text-lg text-center text-blue-600 mb-6">
                Manage, upload, and share your videos seamlessly.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300">
                Get Started
            </button>
        </div>
    );
};

export default WelcomePage;
