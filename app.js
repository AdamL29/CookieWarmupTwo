// Creates a variable that CANNOT be changed.
const bulbasaur = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
const charmander = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
const squirtle = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"

// Function to push images to page via JS.
function injectPokemon(src, alt){
    document.body.insertAdjacentHTML(`beforeend`, 
                                `<img src="${src}" alt="${alt}">`);
}

// Creates Cookie to store image source attribute.
function choosePokemon(event){
    Cookies.set(`imageUrl`, event.target.getAttribute(`src`));
    location.href = "/display.html"
}

// Calls Function to actually show the pokemon on the page.
injectPokemon(bulbasaur, "Bulbasaur");
injectPokemon(charmander, "Charmander");
injectPokemon(squirtle, "Squirtle");

// Creates save for img tags for full body.
let images = document.querySelectorAll(`img`);

// Loop to make each image clickable.
for (img of images){
    img.addEventListener(`click`, choosePokemon);
}

// Equivalent to above
// for (let i=0, i<images.length; i++){
//     images[i].addEventListener(`click`, choosePokemon);
// }