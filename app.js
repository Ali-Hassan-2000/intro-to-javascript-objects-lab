const pokemon = require('./data.js'); // Importing the pokemon data

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

console.dir(pokemon, { maxArrayLength: null })
console.log(`==================`);
console.log(game)
console.log(`==================`);
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = ['Easy', 'Med', 'Hard'];

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
// The starter Pokémon is selected and added to the game party
game.addCounter = 0;
game.autoAddCounter = () => game.addCounter > 0 && game.addCounter < pokemon.length 
? game.addCounter++ : 0;

game.isIncludeParty = (num) => {
  for (let i = 0; i < game.party.length; i++) {
    if (game.party[i].number === pokemon[num].number) {
      return true;
    }
  }
  return false;
};

game.selectStarter = () => {
  for (let i = game.addCounter; i < pokemon.length; i++) {
    if (pokemon[i].starter && !game.isIncludeParty(i)) {
      game.party.push(pokemon[i]);
      game.autoAddCounter();
      break;
    }
  }
};

game.selectStarter();
console.log(game.party);
console.log(`==================`);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.addHPLow = () => {
  for (let i = game.addCounter; i < pokemon.length; i++) {
    if (pokemon[i].hp < 50 && pokemon[i].starter 
      && !game.isIncludeParty(i)) {
      game.party.push(pokemon[i]);
      game.autoAddCounter();
      break;
    }
  }
};

game.addHPHigh = () => {
  for (let i = game.addCounter; i < pokemon.length; i++) {
    if (pokemon[i].hp >= 50 && pokemon[i].starter 
      && !game.isIncludeParty(i)) {
      game.party.push(pokemon[i]);
      game.autoAddCounter();
      break;
    }
  }
};

game.addFire = () => {
  for (let i = game.addCounter; i < pokemon.length; i++) {
    if (pokemon[i].type.toLowerCase() === 'fire' && pokemon[i].starter 
    && !game.isIncludeParty(i)) {
      game.party.push(pokemon[i]);
      game.autoAddCounter();
      break;
    }
  }
};

game.addFire();// this will add pokemon number 4: Charmander
game.addHPLow();// this will add pokemon number 7: Squirtle
game.addHPHigh();// this will not add any pokemon as there is no starter with hp >= 50

console.log(game.party);
console.log(`==================`);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
// The completedGyms function checks each gym's difficulty and sets the completed property accordingly
game.completedGyms = () => game.gyms.forEach(gym => gym.difficulty < 3 
  ? gym.completed = true : gym.completed = false);

game.completedGyms();

console.log(game.gyms);
console.log(`==================`);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// function not finished yet
game.evolvePokemon = () => {
  for (let i = 0; i < game.party.length; i++) {
    if(game.party[i].number < pokemon.length) {
      game.party[i] = pokemon[game.party[i].number + 1];
    }
    else {
      game.party[i] = pokemon[0];
    }
  }
};

console.log(game.party);
game.evolvePokemon();
console.log(`==================`);
console.log(game.party);
console.log(`==================`);


console.log(`==================`);
console.log(`==================`);
