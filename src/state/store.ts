import { writable } from 'svelte/store';
import type { Content, TaskStorage } from '../types';

import { add, remove } from './reducers';

const createTaskStolage = () => {
  const initialState: TaskStorage = { 0: { main: 'base', subTasks: [] } };

  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    add: (parent: number, content: Content) => update(
      (previous: TaskStorage) => add(previous, parent, content),
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

const createSelectedId = () => {
  const initialState: number = 0;

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
export const selectedId = createSelectedId();
