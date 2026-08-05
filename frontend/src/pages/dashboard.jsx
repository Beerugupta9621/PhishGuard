import History from "./History";
import Scanner from "./Scanner";
import Stats from "../components/Stats";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const navigate = useNavigate();

    // Statistics state
    const [statistics, setStatistics] = useState({
        totalScans: 0,
        safeScans: 0,
        phishingScans: 0
    });

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const response = await api.get("/scan/dashboard/demo-user");

            setStatistics(response.data.statistics);

        } catch (error) {

            console.log(error);

        }

    };

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

                <Stats statistics={statistics} />

                <Scanner />

                <History />

            </div>

        </div>

    );

}

export default Dashboard;