import type { Task, TaskStorage } from '../types';

export const add = (previous: TaskStorage, incomming: Task) => {
  const newId = Math.max(
    ...Object
      .keys(previous)
      .map((key) => parseInt(key, 10)),
  ) + 1;

  return { ...previous, [newId]: incomming };
};
