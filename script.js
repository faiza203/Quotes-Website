const quote = document.getElementById("quote");
const author = document.getElementById("author");
let realData = "";
let quoteData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
    window.open(tweetPost)
}

const getNewQuotes = () => {
    const rNum = Math.floor(Math.random() * realData.length);
    quoteData = realData[rNum];
    quote.innerText = quoteData.text;
    author.innerText = quoteData.author ? quoteData.author : "UnKnown";
}

const getQuotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes(realData);
    } catch (err) { console.log(err.message); }
}

getQuotes();