const body = document.querySelector("body");
const quote = document.getElementById("text");
const author = document.getElementById("author");
const quoteAuthor = document.querySelector(".quote-author");
const newQuoteBtn = document.getElementById("new-quote");
const icons = document.querySelector(".fa");
const tweet = document.querySelector(".fa-twitter");
const tweetPar = document.getElementById("tweet-quote");
const tamblur = document.getElementById("tumblr-quote");

let realData = "";
let quoteData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
  window.open(tweetPost);
};

const getNewQuotes = () => {
  const rNum = Math.floor(Math.random() * realData.length);
  quoteData = realData[rNum];
  quote.innerHTML = `          <i class="fa fa-quote-left"> </i>${quoteData.text}`;
  author.innerText = quoteData.author ? "&" + quoteData.author : "UnKnown";
  changeColor();
  quote.classList.add("changeOpacity")
  setTimeout(() => {
    quote.classList.remove("changeOpacity")
  }, 5000);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes(realData);
  } catch (err) {
    console.log(err.message);
  }
};

newQuoteBtn.addEventListener("click", getNewQuotes);

getQuotes();

const changeColor = () => {
  const getRanColor = () => Math.floor(Math.random() * 255);
  const color = `rgb(${getRanColor()} , ${getRanColor()} , ${getRanColor()})`;
  body.style.backgroundColor = color;
  quote.style.color = color;
  quoteAuthor.style.color = color;
  newQuoteBtn.style.backgroundColor = color;
  icons.style.color = color;
  tweetPar.style.backgroundColor = color;
  tamblur.style.backgroundColor = color;
};

changeColor();
