const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const myJson = await response.json();
    document.getElementById("quote").innerText = '"'+myJson.slip.advice+'"'
    document.getElementsByClassName("title")[0].innerHTML = "ADVICE #"+myJson.slip.id
}
