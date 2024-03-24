import GameSavingLoader from './app.js'; // Импортируем класс GameSavingLoader из файла app.js

describe('GameSavingLoader', () => {
  test('load', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000
      }
    });
  });
});
