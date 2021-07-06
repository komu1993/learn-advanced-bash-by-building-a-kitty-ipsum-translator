const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'sed' && lastCommand[1] === 's/freecodecamp/f233C0d3C@mp/i' && lastCommand[2].op === '<' && lastCommand[3] === 'name.txt');
  });
});
