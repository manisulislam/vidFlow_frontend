
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
const SignUp = () => {
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 my-12 ">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-blue-600 font-medium mb-1" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

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

          {/* Avatar */}
          <div>
            <label className="block text-blue-600 font-medium mb-1" htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              type="file"
              {...register("avatar")}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-blue-600 font-medium mb-1" htmlFor="coverImage">Cover Image</label>
            <input
              id="coverImage"
              type="file"
              {...register("coverImage")}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <p className="text-1xl">Already have an account please <span className="text-rose-600"><Link to="/login">Log in</Link></span></p>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
