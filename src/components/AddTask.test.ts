import { get } from 'svelte/store';
import { fireEvent, render } from '@testing-library/svelte';

import { inputField, taskStolage, selectedId } from '../state/store';
// @ts-ignore
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

  context('when nothing is typed', () => {
    const input = '';

    it('does nothing', async () => {
      const { getByRole } = render(AddTask);

      inputField.set(input);
      selectedId.set(0);

      await fireEvent.click(getByRole('button', { name: 'Add' }));

      expect(get(taskStolage)).toEqual({
        0: { main: 'base', subTasks: [] },
      });
    });
  });

  context('when something is typed', () => {
    const input = 'content 1';

    it('adds task to taskStolage on click', async () => {
      const { getByRole } = render(AddTask);

      inputField.set(input);
      selectedId.set(0);

      await fireEvent.click(getByRole('button', { name: 'Add' }));

      expect(get(taskStolage)).toEqual({
        0: { main: 'base', subTasks: [1] },
        1: { main: 'content 1', subTasks: [] },
      });
    });
  });

  it('empty input field on click', async () => {
    const { getByRole } = render(AddTask);

    inputField.set('content 1');

    await fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(get(inputField)).toBe('');
  });
});
