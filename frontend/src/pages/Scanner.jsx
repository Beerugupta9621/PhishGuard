import { useState } from "react";
import api from "../services/api";

function Scanner() {

    const [url, setUrl] = useState("");
    const [result, setResult] = useState("");

    const scanURL = async () => {

        try {

            const response = await api.post("/scan/analyze", {
                url
            });

            setResult(response.data.result);

        } catch (error) {

            alert("Scanning Failed");

        }

    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                URL Scanner
            </h1>

            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border p-3 rounded w-full"
            />

            <button
                onClick={scanURL}
                className="bg-blue-600 text-white mt-4 px-6 py-3 rounded"
            >
                Scan URL
            </button>

            {result && (

                <h2 className="mt-6 text-2xl">

                    Result : {result}

                </h2>

            )}

        </div>

    );

}

export default Scanner;