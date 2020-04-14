import { ColCheck } from './../src/sudoku.js';

describe('ColCheck', () => {
  test('columns must contain numbers 1-9 with no repeats', () => {
    var col = ColCheck("123456789");
    expect(col.checkCol()).toEqual("legal column");
    });
});