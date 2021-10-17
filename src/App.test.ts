import { fireEvent, render } from '@testing-library/svelte';

import { inputField } from './state/store';
// @ts-ignore
import ThemeWrapper from './testUtils/ThemeWrapper.svelte';
import App from './App.svelte';

describe('App', () => {
  beforeEach(() => {
    inputField.reset();
  });

  it('renders header', () => {
    const { getByText } = render(ThemeWrapper, { props: { children: App } });

    expect(getByText('Tresk')).toBeInTheDocument();
  });

  it('renders text field', () => {
    const { getByRole } = render(ThemeWrapper, { props: { children: App } });

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('renders add button', () => {
    const { getByRole } = render(ThemeWrapper, { props: { children: App } });

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  it('adds task using input field and button', async () => {
    inputField.set('task');

    const { getByRole, getByText } = render(ThemeWrapper, { props: { children: App } });

    await fireEvent.click(getByRole('button', { name: 'Add' }));

    expect(getByText('task')).toBeInTheDocument();
  });
});
