import { render } from '@testing-library/svelte';
import AddTask from './AddTask.svelte';

describe('AddTask', () => {
  it('renders Add button', () => {
    const { getByRole } = render(AddTask);

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });
});
