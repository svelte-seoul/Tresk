import { writable } from 'svelte/store';
import type { Task, TaskStorage } from '../types';

import { add, remove } from './reducers';

const createTaskStolage = () => {
  const initialState: TaskStorage = { 0: { main: 'base', subTasks: [] } };

  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    add: (parent: number, incomming: Task) => update(
      (previous: TaskStorage) => add(previous, parent, incomming),
    ),
    remove: (target: number) => update((previous) => remove(previous, target)),
    reset: () => set(initialState),
  };
};

const createInputField = () => {
  const initialState: string = '';

  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    update,
    reset: () => set(initialState),
  };
};

export const taskStolage = createTaskStolage();
export const inputField = createInputField();
