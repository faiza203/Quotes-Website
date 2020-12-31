const getQuotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        let realData = await data.json();
        console.log(realData[0].author);
    } catch (err) { console.log(err); }
}

getQuotes();