import { render } from '@testing-library/svelte';

import type { TaskStorage } from '../types';
import TaskComponent from './Task.svelte';

describe('Task', () => {
  it('renders Maintask', () => {
    const tasks: TaskStorage = {
      0: { main: 'base', subTasks: [1, 2] },
      1: { main: 'content 1', subTasks: [3] },
      2: { main: 'content 2', subTasks: [4] },
      3: { main: 'content 3', subTasks: [] },
      4: { main: 'content 4', subTasks: [] },
    };

    const { queryByText, getByText } = render(TaskComponent, {
      props: { id: 0, tasks },
    });

    expect(queryByText('base')).not.toBeInTheDocument();

    expect(getByText('content 1')).toBeInTheDocument();
    expect(getByText('content 2')).toBeInTheDocument();
    expect(getByText('content 3')).toBeInTheDocument();
    expect(getByText('content 4')).toBeInTheDocument();
  });
});
