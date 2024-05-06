let random = Math.floor(Math.random() * 100) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(response => response.json())
    .then(data => {
        fetch(data.forms[0].url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pokemon').src = data.sprites.front_default;
                document.getElementById('pName').innerText = data.name;
                document.getElementById('pageIco').href = data.sprites.front_default;
            });
    });