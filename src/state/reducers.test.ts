import type { Content, TaskStorage } from '../types';

import { add, remove } from './reducers';

describe('add', () => {
  it('adds new task to list', () => {
    const parent = 1;
    const content: Content = 'content 4';

    const before: TaskStorage = {
      1: { main: 'content 1', subTasks: [] },
      3: { main: 'content 3', subTasks: [] },
    };

    const after: TaskStorage = {
      1: { main: 'content 1', subTasks: [4] },
      3: { main: 'content 3', subTasks: [] },
      4: { main: 'content 4', subTasks: [] },
    };

    expect(add(before, parent, content)).toEqual(after);
  });
});

describe('remove', () => {
  it('removes task from list', () => {
    const target: number = 3;

    const before: TaskStorage = {
      1: { main: 'content 1', subTasks: [3] },
      2: { main: 'content 2', subTasks: [] },
      3: { main: 'content 3', subTasks: [] },
    };

    const after: TaskStorage = {
      1: { main: 'content 1', subTasks: [] },
      2: { main: 'content 2', subTasks: [] },
    };

    expect(remove(before, target)).toEqual(after);
  });
});
