import { render } from '@testing-library/svelte';

import { taskStolage } from '../state/store';
import TaskComponent from './Task.svelte';

describe('Task', () => {
  beforeEach(() => {
    taskStolage.reset();
  });

  it('renders Maintask', () => {
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
});
