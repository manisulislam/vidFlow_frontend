
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import useAuthStore from "../../store/authStore.js"


const LogIn = () => {
  const { login } = useAuthStore();
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    try {
      await login(data);
      window.location.href = '/about-us'; // Redirect to dashboard after login
      reset()
  } catch (error) {
      console.log(error);
  }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg my-12  p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Log In</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-blue-600 font-medium mb-1" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-600 font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-blue-600 font-medium mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div>
            <p className="text-1xl">Have not an account please <span className="text-rose-600"><Link to="/sign-up">Sign Up</Link></span></p>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors duration-300"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
