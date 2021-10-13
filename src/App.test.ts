import { render } from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  it('renders header', () => {
    const { getByText } = render(App);

    expect(getByText('Tresk')).toBeInTheDocument();
  });
});
