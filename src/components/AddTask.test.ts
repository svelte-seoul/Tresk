import { fireEvent, render } from '@testing-library/svelte';
import { get } from 'svelte/store';
import { inputField, taskStolage } from '../state/store';

import AddTask from './AddTask.svelte';

describe('AddTask', () => {
  beforeEach(() => {
    taskStolage.reset();
  });

  it('renders Add button', () => {
    const { getByRole } = render(AddTask);

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  it('adds task to taskStolage on click', () => {
    const task = 'work';

    inputField.set(task);

    const { getByRole } = render(AddTask);

    fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(taskStolage)).toEqual({ 0: { main: 'base', subTasks: [1] }, 1: task });
  });
});
