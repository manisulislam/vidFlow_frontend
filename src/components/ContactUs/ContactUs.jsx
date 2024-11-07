
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send data to an API or log it)
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Left: Static Map Image */}
        <div className="md:w-1/2 h-96 bg-gray-300 rounded-lg overflow-hidden">
          <img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=Raozan&zoom=13&size=600x300&markers=color:blue%7Clabel:%7C22.3076,91.9061" 
            alt="Map of Raozan" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                rows="4"
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
