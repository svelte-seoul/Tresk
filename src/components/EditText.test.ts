import { fireEvent, render } from '@testing-library/svelte';

import EditText from './EditText.svelte';

describe('EditText', () => {
  it('renders input element', () => {
    const { getByRole } = render(EditText);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('exposes onChange event handler', async () => {
    const handleChange = jest.fn();

    const { getByRole, component } = render(EditText);

    component.$on('change', handleChange);

    await fireEvent.input(getByRole('textbox'), { target: { value: 'hello' } });

    expect(handleChange).toBeCalled();
  });
});
