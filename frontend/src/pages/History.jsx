import { useEffect, useState } from "react";
import api from "../services/api";

function History() {

    const [history, setHistory] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchHistory();

    }, []);

    const fetchHistory = async () => {

        try {

            const response = await api.get("/scan/dashboard/demo-user");

            setHistory(response.data.recentScans);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
                Recent Scan History
            </h2>

            <input
                type="text"
                placeholder="Search URL..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border p-3 rounded mb-4"
            />

            <table className="w-full border">

                <thead>

                    <tr className="bg-gray-200">

                        <th className="border p-2">URL</th>

                        <th className="border p-2">Result</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history
                            .filter((item) =>
                                item.url.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((item) => (

                                <tr key={item._id}>

                                    <td className="border p-2">

                                        {item.url}

                                    </td>

                                    <td className="border p-2">

                                        {item.result}

                                    </td>

                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default History;