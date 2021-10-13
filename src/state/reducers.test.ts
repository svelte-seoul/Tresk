import type { Task, TaskStorage } from '../types';

import { add, remove } from './reducers';

describe('add', () => {
  it('adds new task to list', () => {
    const incomming: Task = { main: 'content 4', subTasks: [] };

    const before: TaskStorage = {
      1: { main: 'content 1', subTasks: [] },
      3: { main: 'content 3', subTasks: [] },
    };

    const after: TaskStorage = {
      1: { main: 'content 1', subTasks: [] },
      3: { main: 'content 3', subTasks: [] },
      4: { main: 'content 4', subTasks: [] },
    };

    expect(add(before, incomming)).toEqual(after);
  });
});

describe('remove', () => {
  it('removes task from list', () => {
    const target: number = 3;

    const before: TaskStorage = {
      1: { main: 'content 1', subTasks: [] },
      3: { main: 'content 3', subTasks: [] },
    };

    const after: TaskStorage = {
      1: { main: 'content 1', subTasks: [] },
    };

    expect(remove(before, target)).toEqual(after);
  });
});
