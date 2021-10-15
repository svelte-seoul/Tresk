import { writable } from 'svelte/store';
import type { Task, TaskStorage } from '../types';

import { add, remove } from './reducers';

const createTaskStolage = () => {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    add: (parent: number, incomming: Task) => update(
      (previous: TaskStorage) => add(previous, parent, incomming),
    ),
    remove: (target: number) => update((previous) => remove(previous, target)),
    reset: () => set({}),
  };
};

export const taskStolage = createTaskStolage();
export const inputField = writable('');
