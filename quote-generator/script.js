let quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "In the end, we only regret the chances we didn't take. - Lewis Carroll",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "You learn more from failure than from success. Don't let it stop you. - Unknown",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "If you are working on something that you really care about, you don't have to be pushed. - Steve Jobs",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein"
];

const button = document.querySelector("#btn");
const head = document.querySelector("h1");
const copyBtn = document.querySelector("#copy-btn");
const tweetBtn = document.querySelector("#tweet-btn");

// Generate random quote
button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length);
    head.textContent = quotes[index];
});

// Copy quote to clipboard
copyBtn.addEventListener('click', () => {
    const quoteText = head.textContent;
    navigator.clipboard.writeText(quoteText);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy Quote";
    }, 2000);
});

// Tweet quote
tweetBtn.addEventListener('click', () => {
    const quote = head.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(tweetUrl, '_blank');
});
