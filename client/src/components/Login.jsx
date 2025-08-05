import React from "react";

const Login = () => {
  const loginWithGoogle = () => {
    window.open("http://localhost:3007/auth/google/callback", "_self");
  };

  const loginWithGitHub = () => {
    window.open("http://localhost:3007/auth/github/callback", "_self");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login
        </h1>

        <form className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
            Not Registered?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create an account
            </a>
          </p>
        </form>

        <button
          onClick={loginWithGoogle}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mb-3"
        >
          Sign in with Google
        </button>

        <button
          onClick={loginWithGitHub}
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
