import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Register() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("/auth/register", form);

            alert(response.data.message);

            setForm({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-xl p-8 w-96"
            >

                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded p-3 mb-4"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded p-3 mb-4"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border rounded p-3 mb-4"
                />

                <button
                    type="submit"
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

            </form>

        </div>
    );
}

export default Register;