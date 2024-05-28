let url = 'https://coffee.alexflipnote.dev/random.json' //api from js
fetch(url, { method: "GET" }) //take two parmeter .. url and method or object 
    .then(response => response.json()) //displey the date of res ..convert to json 
    .then(data => { //like awite here display the data
        let coll = document.querySelector('img')
        coll.src = data.file
        console.log(coll)
    });