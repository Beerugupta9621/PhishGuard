import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded p-3 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-3 mb-4"
        />

        <button
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;