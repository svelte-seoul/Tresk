import type { Task, TaskStorage } from '../types';

export const add = (previous: TaskStorage, parent: number, child: Task): TaskStorage => {
  const currentMaxId = Math.max(
    ...Object
      .keys(previous)
      .map((key) => parseInt(key, 10)),
  );

  const nextId = currentMaxId + 1;

  return {
    ...previous,
    [parent]: {
      ...previous[parent],
      subTasks: [...previous[parent].subTasks, nextId],
    },
    [nextId]: child,
  };
};

export const remove = (previous: TaskStorage, target: number) : TaskStorage => (
  { ...previous, [target]: undefined }
);
