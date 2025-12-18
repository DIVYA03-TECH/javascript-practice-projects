document.addEventListener("DOMContentLoaded", () => {

    const quotes = [
        "The only way to do great work is to love what you do. — Steve Jobs",
        "Life is what happens when you're busy making other plans. — John Lennon",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "Success is not final, failure is not fatal. — Winston Churchill",
        "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
        "Do what you can, with what you have, where you are. — Theodore Roosevelt",
        "Dream big and dare to fail. — Norman Vaughan",
        "It always seems impossible until it’s done. — Nelson Mandela",
        "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
        "Opportunities don’t happen. You create them. — Chris Grosser"
    ];

    const colors = [
        "#1f6feb", "#238636", "#f97316", "#db2777", "#8b5cf6",
        "#16a34a", "#eab308", "#f43f5e", "#14b8a6", "#3b82f6"
    ];

    const quoteText = document.querySelector("h1");
    const card = document.getElementById("first");
    const newQuoteBtn = document.getElementById("btn");
    const copyBtn = document.getElementById("copy-btn");
    const tweetBtn = document.getElementById("tweet-btn");

    let lastIndex = -1;

    function generateQuote() {
        // Pick new quote
        let index;
        do {
            index = Math.floor(Math.random() * quotes.length);
        } while (index === lastIndex);
        lastIndex = index;

        // Fade out text
        quoteText.style.opacity = 0;
        setTimeout(() => {
            quoteText.textContent = quotes[index];
            quoteText.style.opacity = 1;
        }, 150);

        // Pick random color
        const colorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[colorIndex];

        // Apply color to card and buttons
        card.style.backgroundColor = color;
        newQuoteBtn.style.backgroundColor = color;
        copyBtn.style.backgroundColor = color;
        tweetBtn.style.backgroundColor = color;
    }

    newQuoteBtn.addEventListener("click", generateQuote);

    // Copy quote
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(quoteText.textContent);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy Quote", 2000);
    });

    // Tweet quote
    tweetBtn.addEventListener("click", () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.textContent)}`;
        window.open(tweetUrl, "_blank");
    });

    // Initial quote
    generateQuote();
});





