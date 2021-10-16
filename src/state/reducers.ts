import type { Content, TaskStorage } from '../types';

export const add = (previous: TaskStorage, parent: number, content: Content): TaskStorage => {
  const currentMaxId = Math.max(
    ...Object
      .keys(previous)
      .map((key) => parseInt(key, 10)),
  );

  const { subTasks } = previous[parent];

  const nextId = currentMaxId + 1;

  return ({
    ...previous,
    [parent]: {
      ...previous[parent],
      subTasks: [...subTasks, nextId],
    },
    [nextId]: { main: content, subTasks: [] },
  });
};

export const remove = (previous: TaskStorage, target: number) : TaskStorage => {
  const parent = Object.entries(previous).reduce(
    (ret, [id, { subTasks }]) => {
      if (!subTasks.includes(target)) {
        return ret;
      }

      return id;
    }, -1,
  );

  const { subTasks } = previous[parent];

  return ({
    ...previous,
    [parent]: {
      ...previous[parent],
      subTasks: subTasks.filter((id: number) => id !== target),
    },
    [target]: undefined,
  });
};
