import type { TaskStorage } from '../types';

import { add, remove } from './reducers';

describe('add', () => {
  it('adds new task to list', () => {
    const before: TaskStorage = {
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [] },
    };

    const after: TaskStorage = {
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [2] },
      2: { main: 'content 2', subTasks: [] },
    };

    expect(add(before, 1, 'content 2')).toEqual(after);
  });
});

describe('remove', () => {
  it('removes task from list', () => {
    const before: TaskStorage = {
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [2] },
      2: { main: 'content 2', subTasks: [] },
    };

    const after: TaskStorage = {
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [] },
    };

    expect(remove(before, 2)).toEqual(after);
  });
});
