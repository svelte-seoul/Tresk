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

  it('adds task to taskStolage on click', async () => {
    const { getByRole } = render(AddTask);

    selectedId.set(0);
    inputField.set('content 1');
    await fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(taskStolage)).toEqual({
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [] },
    });

    selectedId.set(1);
    inputField.set('content 2');
    await fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(taskStolage)).toEqual({
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [2] },
      2: { main: 'content 2', subTasks: [] },
    });
  });

  it('empty input field on click', async () => {
    const { getByRole } = render(AddTask);

    inputField.set('content 1');

    await fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(inputField)).toBe('');
  });
});
