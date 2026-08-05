function Stats({ statistics }) {

    return (

        <div className="grid grid-cols-3 gap-4 mb-8">

            <div className="bg-blue-600 text-white p-6 rounded-lg shadow">

                <h2 className="text-lg">Total Scans</h2>

                <p className="text-3xl font-bold">
                    {statistics.totalScans}
                </p>

            </div>

            <div className="bg-green-600 text-white p-6 rounded-lg shadow">

                <h2 className="text-lg">Safe URLs</h2>

                <p className="text-3xl font-bold">
                    {statistics.safeScans}
                </p>

            </div>

            <div className="bg-red-600 text-white p-6 rounded-lg shadow">

                <h2 className="text-lg">Phishing URLs</h2>

                <p className="text-3xl font-bold">
                    {statistics.phishingScans}
                </p>

            </div>

        </div>

    );

}

export default Stats;