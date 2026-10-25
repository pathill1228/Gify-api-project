// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const api = 'http://api.giphy.com/v1/gifs/search?api_key=';

const input = document.querySelector('input');
const form = document.querySelector('form');
const gifSection = document.querySelector('#gif-display-section');
const removeBtn = document.querySelector('#remove-btn');

async function getGif(searchTerm) {
    const response = await fetch(api + giphyApiKey + '&q=' + searchTerm);
    const json = await response.json();
    //console.log(json.data[0]);
    //console.log(json.data.length);

    const randIndex = Math.floor(Math.random() * json.data.length);
    displayGif(searchTerm, json.data[randIndex]);
}

function displayGif(searchTerm, ...gif) {
    //console.log(gif);
    //console.log(searchTerm);

    image = document.createElement('img');
    image.src = gif[0].images.downsized.url;
    image.alt = searchTerm;
    image.height = gif[0].images.downsized.height / 2;
    image.width = gif[0].images.downsized.width / 2;

    gifSection.appendChild(image);

    // console.dir(image);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getGif(input.value);
});

removeBtn.addEventListener('click', (e) => {
    gifSection.replaceChildren();
})