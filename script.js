const quote = document.getElementById("quote");
const author = document.getElementById("author");
let realData = "";


const tweetNow = () => {
    let tweetPost = "https://twitter.com/intent/tweet";
    window.open(tweetPost)
}

const getNewQuotes = () => {
    const rNum = Math.floor(Math.random() * realData.length);
    quote.innerText = realData[rNum].text;
    author.innerText = realData[rNum].author ? realData[rNum].author : "UnKnown";
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