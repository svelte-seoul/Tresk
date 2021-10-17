import { get } from 'svelte/store';
import { fireEvent, render } from '@testing-library/svelte';

import { taskStolage, selectedId } from '../state/store';
import Task from './Task.svelte';
// @ts-ignore
import ThemeWrapper from '../testUtils/ThemeWrapper.svelte';

describe('Task', () => {
  beforeEach(() => {
    taskStolage.reset();
    selectedId.reset();
  });

  it('renders tasks recursively', () => {
    taskStolage.set({
      0: { main: 'base', subTasks: [1, 2] },
      1: { main: 'content 1', subTasks: [3] },
      2: { main: 'content 2', subTasks: [4] },
      3: { main: 'content 3', subTasks: [] },
      4: { main: 'content 4', subTasks: [] },
    });

    const { queryByText, getByText } = render(ThemeWrapper, {
      props: {
        children: Task,
        props: { id: 0 },
      },
    });

    expect(queryByText('base')).not.toBeInTheDocument();

    expect(getByText('content 1')).toBeInTheDocument();
    expect(getByText('content 2')).toBeInTheDocument();
    expect(getByText('content 3')).toBeInTheDocument();
    expect(getByText('content 4')).toBeInTheDocument();
  });

  it('selects task on click', async () => {
    selectedId.set(0);
    taskStolage.set({
      0: { main: 'base', subTasks: [1] },
      1: { main: 'content 1', subTasks: [] },
    });

    const { getByText } = render(ThemeWrapper, {
      props: {
        children: Task,
        props: { id: 0 },
      },
    });

    await fireEvent.click(getByText('content 1'));

    expect(get(selectedId)).not.toBe(0);
    expect(get(selectedId)).toBe(1);
  });

  it.todo('distinguishes selected task from rest');
  // limitation : unexpected behavior of getComputedStyle(element).getPropertyValue(styleProp)
});
