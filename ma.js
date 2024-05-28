let ulr = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
    const response = await fetch(ulr);
    const data = await response.json();
    let coll = document.querySelector('#character-container')
    let ree = data.results;
    console.log(ree)
    ree.forEach(character => {
        let card = document.createElement('div');
        card.classList.add('card');

        let image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;

        const name = document.createElement('h2');
        name.textContent = character.name;

        card.appendChild(image);
        card.appendChild(name);

        coll.appendChild(card);
    });
};

fetchCharacters();