function analyzeURL(url) {

    let score = 0;

    if (url.includes("@"))
        score += 25;

    if (url.includes("-"))
        score += 10;

    if (url.length > 75)
        score += 20;

    if (url.startsWith("http://"))
        score += 25;

    if (url.split(".").length > 3)
        score += 20;

    let prediction = "Safe";

    if (score >= 40)
        prediction = "Phishing";

    return {
        score,
        prediction
    };
}

module.exports = analyzeURL;