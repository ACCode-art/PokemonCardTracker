// selectors

// const input = document.querySelector(".input");
const main = document.querySelector('.main');
const header__decks = document.querySelector('.header__decks');
// const mainCollection = document.querySelector(".mainCollection");
// const pokemonContainerOverlay = document.querySelector(
//   ".pokemonContainer__overlay"
// );
const decks__overlay = document.querySelector('.decks__overlay');
const decks__overlayCreateDeck = document.querySelector(
  '.decks__overlayCreateDeck'
);
const createDeck__overlay = document.querySelector('.createDeck__overlay');
const createDeck__overlayExit = document.querySelector(
  '.createDeck__overlayExit'
);
const createDeck__input = document.querySelector('.createDeck__input');
const createDeck__button = document.querySelector('.createDeck__button');
// const mainOverlayCollection = document.querySelector(
//   ".main__overlayCollection"
// );
// const headerRightImg = document.querySelector(".header__rightImg");
// const span = document.querySelectorAll(".currentDeckAmount");

// // initial arrays

// let collection = [];

// let data = [];

// // event Listeners

class Deck {
  constructor(deckName) {
    this.id = Date.now();
    this.deckName = deckName;
    this.cards = [];
    this.imageCover =
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.drawception.com%2Fimages%2Fpanels%2F2017%2F8-20%2FA9LPm6Wy5b-4.png&f=1&nofb=1';
  }
}

header__decks.addEventListener('mouseenter', () => {
  decks__overlay.classList.toggle('show');
});

decks__overlay.addEventListener('mouseleave', () => {
  decks__overlay.classList.toggle('show');
});

decks__overlayCreateDeck.addEventListener('click', () => {
  createDeck__overlay.classList.toggle('show-flex');
});

createDeck__overlayExit.addEventListener('click', () => {
  createDeck__overlay.classList.toggle('show-flex');
});

// Create Deck

// Display Decks

// mainOverlayCollection.addEventListener("click", (e) => {
//   const target = e.target;
//   const name = target.querySelector("p");
//   // console.log(target);
//   name.classList.toggle("itallic");
// });

// main.addEventListener("click", (e) => {
//   const target = e.target;

//   if (target.classList.contains("pokemonContainer__overlay")) {
//     const name = target.querySelector("h2").textContent;
//     const number = target.querySelector("p").textContent;
//     const setName = target.querySelector("h3").textContent;
//     collection.push([name, setName, number]);
//     console.log(collection);

//     const htmlString = collection
//       .map((poke) => {
//         return ` <div class="main__overlayPokemon">
//         <p>${poke[0]} - ${poke[1]} ${poke[2]}</p>
//         <div class="prizedDelete">
//           <img
//             src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpixelartmaker.com%2Fart%2F095fdd43110bb39.png&f=1&nofb=1"
//             alt=""
//           />
//           <img
//             src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpixelartmaker.com%2Fart%2Fe55ed7a782faa31.png&f=1&nofb=1"
//             alt=""
//           />
//         </div>
//       </div>`;
//       })
//       .join("");

//     mainOverlayCollection.innerHTML = htmlString;

//     for (sp of span) {
//       sp.textContent = collection.length;
//     }
//   }
// });

// input.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filtered = data.data.filter((pokemon) => {
//     return (
//       pokemon.name.toLowerCase().includes(searchString) ||
//       pokemon.id.toLowerCase().includes(searchString) ||
//       pokemon.number.toLowerCase().includes(searchString)
//     );
//   });
//   displayPokemon(filtered);
//   console.log(filtered);
// });

// const loadPokemon = async () => {
//   const res = await fetch("https:api.pokemontcg.io/v2/cards?q=name:blastoise");
//   data = await res.json();

//   console.log(data);
// };

// loadPokemon();

// const displayPokemon = (pokemon) => {
//   const htmlString = pokemon
//     .map((poke) => {
//       return `<div
//       class="pokemonContainer"
//       style="background-image: url(${poke.images.small})"
//     >
//       <div class="pokemonContainer__overlay" >
//         <h2>${poke.name}</h2>
//         add+
//         <div class="set">
//           <h3>${poke.set.name}</h3>
//           <p>${poke.number}/${poke.set.total}</p>
//         </div>
//       </div>
//     </div>`;
//     })
//     .join("");

//   main.innerHTML = htmlString;
// };
