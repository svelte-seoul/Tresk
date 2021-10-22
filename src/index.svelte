<script>
    import { ThemeProvider } from 'svelte-theme-provider';

    import App from './App.svelte';
</script>

<ThemeProvider initialTheme='light'>
    <App/>
</ThemeProvider>
