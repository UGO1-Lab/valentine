// Created with love by UGOEBENAJA1

function showQuote() {
    let quote = document.getElementById("quote");

    let sisterQuotes = [
        "A sister is a little bit of childhood that can never be lost. 💕",
        "Having a sister is like having a built-in best friend. 🌸",
        "Sisters may drive you crazy, but they are your forever friend. ❤",
        "Because I have a sister, I always have someone to love. 💖",
        "A sister is a gift to the heart and a friend to the soul. 🌟"
    ];

    let randomQuote = sisterQuotes[Math.floor(Math.random() * sisterQuotes.length)];
    
    quote.innerHTML = randomQuote;
}