function loadPokemon() {
    let random = Math.floor(Math.random() * 1000) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(response => response.json())
        .then(data => {
            fetch(data.forms[0].url)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('pokemon').src = data.sprites.front_default;
                    document.getElementById('pokemon').title = data.name;
                    document.getElementById('pName').innerText = data.name;
                    document.getElementById('pName').title = data.name;
                    document.getElementById('pageIco').href = data.sprites.front_default;
                });
        })
        .catch(err => console.log(err));
}

loadPokemon();


document.querySelector('.header').addEventListener('click', loadNewPokemon);

function loadNewPokemon() {
    document.getElementById('pokemon').src = 'ZKZg.gif';
    document.getElementById('pName').innerText = 'Loading...';
    loadPokemon();
}