const getNewQuotes = (qoutesLength) => {
    const rNum = Math.floor(Math.random() * qoutesLength)
    return rNum;
}
const getQuotes = async() => {
    const api = "https://type.fit/api/quotes";
    let realData;
    try {
        let data = await fetch(api);
        realData = await data.json();
        const quote = getNewQuotes(realData.length);
        console.log(realData[quote]);
    } catch (err) { console.log(err.message); }
}

getQuotes();