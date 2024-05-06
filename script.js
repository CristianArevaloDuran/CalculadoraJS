// Funciones esteticas

function loadPokemon() {
    let random = Math.floor(Math.random() * 1000) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(response => response.json())
        .then(data => {
            fetch(data.forms[0].url)
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => { 
                        document.getElementById('pokemon').src = data.sprites.front_default;
                        document.getElementById('pokemon').title = data.name;
                        document.getElementById('pName').innerText = data.name;
                        document.getElementById('pName').title = data.name;
                        document.getElementById('pageIco').href = data.sprites.front_default;
                    }, 1000);
                });
        })
        .catch(err => console.log(err));
}

loadPokemon();


document.querySelector('.header').addEventListener('click', loadNewPokemon);

function loadNewPokemon() {
    document.getElementById('pokemon').src = 'ZKZg.gif';
    document.getElementById('pName').innerText = 'Cargando...';
    setTimeout(() => {
        loadPokemon();
    }, 1000);
}

document.querySelector('.settings').addEventListener('click', () => {
    document.querySelector('.settings').classList.toggle('active');
    document.querySelector('.settings-content').classList.toggle('active');
    document.querySelector('.settings svg').classList.toggle('active');
});

// Funciones de calculo

/*function addNumber(num) {
    number += num;
    document.getElementById('display').value = number;
}*/

function clearDisplay() {
    document.getElementById('display').value = '';
}