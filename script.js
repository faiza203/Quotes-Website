const quote = document.getElementById("quote");
const author = document.getElementById("author");
let realData = "";

const getNewQuotes = () => {
    const rNum = Math.floor(Math.random() * realData.length);
    quote.innerText = realData[rNum].text;
    author.innerText = realData[rNum].author;
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