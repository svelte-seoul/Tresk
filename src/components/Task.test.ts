import { render } from '@testing-library/svelte';

import TaskComponent from './Task.svelte';
import type { Task } from '../types';

describe('Task', () => {
  it('renders Maintask', () => {
    const task: Task = {
      main: 'content 1',
      subTasks: [],
    };
    const { getByText } = render(TaskComponent, {
      props: task,
    });

    expect(getByText('content 1')).toBeInTheDocument();
  });

  it('renders SubTasks recursively', () => {
    const task: Task = {
      main: 'content 1',
      subTasks: [
        {
          main: 'content 2',
          subTasks: [],
        },
        {
          main: 'content 3',
          subTasks: [
            {
              main: 'content 4',
              subTasks: [],
            },
          ],
        }],
    };

    const { getByText } = render(TaskComponent, {
      props: task,
    });

    expect(getByText('content 1')).toBeInTheDocument();
    expect(getByText('content 2')).toBeInTheDocument();
    expect(getByText('content 3')).toBeInTheDocument();
    expect(getByText('content 4')).toBeInTheDocument();
  });
});
