import { fireEvent, render } from '@testing-library/svelte';
import { get } from 'svelte/store';
import { inputField, taskStolage, selectedId } from '../state/store';

import AddTask from './AddTask.svelte';

describe('AddTask', () => {
  beforeEach(() => {
    inputField.reset();
    taskStolage.reset();
    selectedId.reset();
  });

  it('renders Add button', () => {
    const { getByRole } = render(AddTask);

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  it('adds task to taskStolage on click', () => {
    const { getByRole } = render(AddTask);

    selectedId.set(0);
    inputField.set('task 1');
    fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(taskStolage)).toEqual({
      0: { main: 'base', subTasks: [1] },
      1: { main: 'task 1', subTasks: [] },
    });

    selectedId.set(1);
    inputField.set('task 2');
    fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(taskStolage)).toEqual({
      0: { main: 'base', subTasks: [1] },
      1: { main: 'task 1', subTasks: [2] },
      2: { main: 'task 2', subTasks: [] },
    });
  });
});
