function analyzeURL(url) {

    let score = 0;

    if (url.includes("@")) score += 20;
    if (url.includes("-")) score += 10;
    if (url.length > 60) score += 20;
    if (url.startsWith("http://")) score += 20;

    const prediction = score >= 40 ? "Phishing" : "Safe";

    return {
        prediction,
        score
    };
}

module.exports = analyzeURL;