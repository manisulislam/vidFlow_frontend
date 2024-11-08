
import './WelcomeMessage.css';

function WelcomeMessage() {
  return (
    <div className="welcome-container bg-indigo-700 h-12 flex items-center overflow-hidden">
      <div className="welcome-message whitespace-nowrap text-white font-semibold text-lg">
        Welcome to the Video Management System! Enjoy a seamless video experience!
      </div>
    </div>
  );
}

export default WelcomeMessage;
