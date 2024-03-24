import read from './reader.js';
import json from './parser.js';

class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // Чтение данных из файла
      const value = await json(data); // Преобразование данных в JSON
      return JSON.parse(value); // Возвращаем объект GameSaving
    } catch (error) {
      throw new Error(`Failed to load game saving: ${error}`);
    }
  }
}

export default GameSavingLoader; // Экспортируем класс GameSavingLoader из файла app.js
