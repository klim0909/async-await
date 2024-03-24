import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log("Saving loaded:", saving);
}, (error) => {
  console.error("Error loading saving:", error);
});