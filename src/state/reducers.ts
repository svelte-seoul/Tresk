import type { Task, TaskStorage } from '../types';

export const add = (previous: TaskStorage, incomming: Task): TaskStorage => {
  const newId = Math.max(
    ...Object
      .keys(previous)
      .map((key) => parseInt(key, 10)),
  ) + 1;

  return { ...previous, [newId]: incomming };
};

export const remove = (previous: TaskStorage, target: number) : TaskStorage => (
  { ...previous, [target]: undefined }
);
