function analyzeURL(url) {

    // Check if URL is valid
    try {

        new URL(url);

    } catch {

        return {
            prediction: "Invalid URL",
            score: 0
        };

    }

    let score = 0;

    // HTTP instead of HTTPS
    if (url.startsWith("http://"))
        score += 25;

    // @ symbol
    if (url.includes("@"))
        score += 25;

    // Count hyphens
    if ((url.match(/-/g) || []).length >= 2)
        score += 20;

    // Long URL
    if (url.length > 60)
        score += 20;

    // Suspicious keywords
    const keywords = [
        "login",
        "verify",
        "paypal",
        "bank",
        "secure",
        "account",
        "update",
        "signin",
        "wallet"
    ];

    keywords.forEach(word => {

        if (url.toLowerCase().includes(word))
            score += 15;

    });

    // Many dots
    if ((url.match(/\./g) || []).length > 3)
        score += 10;

    // Maximum score = 100
    if (score > 100)
        score = 100;

    const prediction = score >= 50
        ? "Phishing"
        : "Safe";

    return {
        prediction,
        score
    };
}

module.exports = analyzeURL;