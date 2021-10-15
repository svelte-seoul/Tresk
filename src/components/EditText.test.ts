import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import EditText from './EditText.svelte';

describe('EditText', () => {
  it('renders input element', () => {
    const { getByRole } = render(EditText);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('exposes onChange event handler', () => {
    const handleChange = jest.fn();

    const { getByRole, component } = render(EditText);

    component.$on('change', handleChange);

    userEvent.type(getByRole('textbox'), 'hello');

    expect(handleChange).toBeCalled();
  });
});
