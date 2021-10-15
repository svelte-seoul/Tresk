import { render } from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  it('renders header', () => {
    const { getByText } = render(App);

    expect(getByText('Tresk')).toBeInTheDocument();
  });

  it('renders text field', () => {
    const { getByRole } = render(App);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('renders add button', () => {
    const { getByRole } = render(App);

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });
});
