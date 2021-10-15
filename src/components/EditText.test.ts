import { fireEvent, render } from '@testing-library/svelte';
import { get } from 'svelte/store';
import { inputField } from '../state/store';

import EditText from './EditText.svelte';

describe('EditText', () => {
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
