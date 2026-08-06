import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ statistics }) {

    const data = {
        labels: ["Safe", "Phishing"],
        datasets: [
            {
                data: [
                    statistics.safeScans,
                    statistics.phishingScans
                ]
            }
        ]
    };

    return (
        <div className="w-80 mx-auto my-8">
            <Pie data={data} />
        </div>
    );
}

export default PieChart;