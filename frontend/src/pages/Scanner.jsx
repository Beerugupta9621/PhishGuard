import { useState } from "react";
import api from "../services/api";

function Scanner() {

    const [url, setUrl] = useState("");
    const [result, setResult] = useState("");

    const scanURL = async () => {

        try {

            const response = await api.post("/scan/analyze", {
                user: "demo-user",
                url
            });

            setResult(
                `${response.data.prediction} (Risk Score: ${response.data.riskScore})`
            );

        } catch (error) {

            console.log("Error:", error);

            if (error.response) {

                console.log("Response:", error.response.data);

                alert(error.response.data.message);

            } else {

                console.log(error.message);

                alert(error.message);

            }

        }

    };

    return (

        <div className="mt-8">

            <h2 className="text-2xl font-bold mb-4">
                Scan a URL
            </h2>

            <input
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full border p-3 rounded"
            />

            <button
                onClick={scanURL}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
            >
                Scan URL
            </button>

            {
                result && (
                    <div className="mt-4 p-4 border rounded bg-gray-100">
                        {result}
                    </div>
                )
            }

        </div>

    );

}

export default Scanner;