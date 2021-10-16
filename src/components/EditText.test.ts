import { get } from 'svelte/store';
import { fireEvent, render } from '@testing-library/svelte';

import { inputField } from '../state/store';
import EditText from './EditText.svelte';

describe('EditText', () => {
  beforeEach(() => {
    inputField.reset();
  });

  it('renders input element', () => {
    const { getByRole } = render(EditText);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('updates inputField', async () => {
    const { getByRole } = render(EditText);

    await fireEvent.input(getByRole('textbox'), { target: { value: 'task' } });

    expect(get(inputField)).toBe('task');
  });
});
