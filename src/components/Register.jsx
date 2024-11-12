import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './MainLayout';

const Register = () => {
  const contextValue = useContext(AuthContext);
  console.log(contextValue);
  const { handleGithublogin, handleGooglelogin, handleTwitterLogin } =
    contextValue;
  return (
    <div>
      <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Create Your Account
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Sign up to start your journey with us!
          </p>

          <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">
              Register your account
            </p>

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Register
            </button>

            {/* Sign-in Link */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link className="underline text-indigo-600" to="/login">
                Sign in here
              </Link>
            </p>
          </form>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <button
              onClick={handleGooglelogin}
              className="text-4xl text-sky-500  my-2 px-6 py-2 rounded-lg  transition duration-300"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleGithublogin}
              className="text-4xl text-sky-500  my-2 px-6 py-2 rounded-lg  transition duration-300"
            >
              <FaGithub />
            </button>
            <button
              onClick={handleTwitterLogin}
              className="text-4xl text-sky-500  my-2 px-6 py-2 rounded-lg transition duration-300"
            >
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
