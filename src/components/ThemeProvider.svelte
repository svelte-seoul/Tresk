<script lang='ts'>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    import { theme } from '../theme';
    import type { ThemeType, Theme } from '../theme';

    export let initialTheme : ThemeType;

    type ThemeStolage = {themeType: ThemeType, theme: Theme}

    const stolage = writable<ThemeStolage>({
      themeType: initialTheme,
      theme: theme[initialTheme],
    });

    const toggle = () => {
      stolage.update(({ themeType }) => {
        const newThemeType = themeType === 'light' ? 'dark' : 'light';
    
        return ({
          themeType: newThemeType,
          theme: theme[newThemeType],
        });
      });
    };
    
    setContext('theme', { Theme: stolage, toggle });
</script>
  
<slot></slot>
