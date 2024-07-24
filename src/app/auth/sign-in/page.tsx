import React from "react";

const signIn = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-center text-3xl font-bold mb-6">Instagram</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number, username, or email
              </label>
              <input
                type="text"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="block h-px w-1/3 bg-gray-300"></span>
              <span className="text-sm text-gray-500">OR</span>
              <span className="block h-px w-1/3 bg-gray-300"></span>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <i className="fab fa-facebook mr-2"></i> Log in with Facebook
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Get the app.
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default signIn;
