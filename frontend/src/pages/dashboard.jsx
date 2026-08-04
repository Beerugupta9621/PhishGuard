import { useNavigate } from "react-router-dom";

import Scanner from "./Scanner";
function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="bg-blue-600 text-white p-4 flex justify-between">

                <h1 className="text-2xl font-bold">
                    PhishGuard Dashboard
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 px-4 py-2 rounded"
                >
                    Logout
                </button>

            </div>

            <div className="p-10">

               <Scanner /> 

            </div>

        </div>

    );

}

export default Dashboard;