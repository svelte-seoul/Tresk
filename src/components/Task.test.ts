import { render } from '@testing-library/svelte';

// @ts-ignore
import Task from './Task.svelte';
import ThemeWrapper from '../testUtils/ThemeWrapper.svelte';
import { taskStolage } from '../state/store';

describe('Task', () => {
  beforeEach(() => {
    taskStolage.reset();
  });

  it('renders Maintask', () => {
    const { queryByText, getByText } = render(ThemeWrapper, {
      props: {
        children: Task,
        props: { id: 0 },
      },
    });

    taskStolage.set({
      0: { main: 'base', subTasks: [1, 2] },
      1: { main: 'content 1', subTasks: [3] },
      2: { main: 'content 2', subTasks: [4] },
      3: { main: 'content 3', subTasks: [] },
      4: { main: 'content 4', subTasks: [] },
    });

    expect(queryByText('base')).not.toBeInTheDocument();

    expect(getByText('content 1')).toBeInTheDocument();
    expect(getByText('content 2')).toBeInTheDocument();
    expect(getByText('content 3')).toBeInTheDocument();
    expect(getByText('content 4')).toBeInTheDocument();
  });
});
