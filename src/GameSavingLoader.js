import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then(data => json(data))
        .then(jsonData => resolve(JSON.parse(jsonData)))
        .catch(error => reject(error));
    });
  }
}