import { fireEvent, render } from '@testing-library/svelte';

// @ts-ignore
import ThemeWrapper from '../testUtils/ThemeWrapper.svelte';
import ShowContext from '../testUtils/ShowContext.svelte';

describe('ThemeProvider', () => {
  it('provides name of current theme', () => {
    const { getByText } = render(ThemeWrapper, {
      props: {
        initialTheme: 'light',
        children: ShowContext,
      },
    });

    expect(getByText(/light/)).toBeInTheDocument();
  });

  it('provides theme object by name', () => {
    const { getByText } = render(ThemeWrapper, {
      props: {
        initialTheme: 'light',
        children: ShowContext,
      },
    });

    expect(getByText(/"text":"#000"/)).toBeInTheDocument();
  });

  it('provides theme toggler function', async () => {
    const { getByRole, getByText } = render(ThemeWrapper, {
      props: {
        initialTheme: 'light',
        children: ShowContext,
      },
    });

    await fireEvent.click(getByRole('button', { name: 'toggle' }));

    expect(getByText(/dark/)).toBeInTheDocument();
    expect(getByText(/"text":"#FFF"/)).toBeInTheDocument();

    await fireEvent.click(getByRole('button', { name: 'toggle' }));

    expect(getByText(/light/)).toBeInTheDocument();
    expect(getByText(/"text":"#000"/)).toBeInTheDocument();
  });
});
