import { fireEvent, render } from '@testing-library/svelte';
import { get } from 'svelte/store';

import { taskStolage, selectedId } from '../state/store';
// @ts-ignore
import TaskComponent from './Task.svelte';

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

    const { queryByText, getByText } = render(TaskComponent, {
      props: { id: 0 },
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

    const { getByText } = render(TaskComponent, {
      props: { id: 0 },
    });

    await fireEvent.click(getByText('content 1'));

    expect(get(selectedId)).not.toBe(0);
    expect(get(selectedId)).toBe(1);
  });

  it('distinguishes selected task from rest', async () => {
    selectedId.set(1);
    taskStolage.set({
      0: { main: 'base', subTasks: [1, 2] },
      1: { main: 'content 1', subTasks: [] },
      2: { main: 'content 2', subTasks: [] },
    });

    const { getByText } = render(TaskComponent, {
      props: { id: 0 },
    });

    const selected = getByText('content 1');
    const notSelected = getByText('content 2');

    expect(
      getComputedStyle(selected).color !== getComputedStyle(notSelected).color,
    ).toBeTruthy();
  });
});
