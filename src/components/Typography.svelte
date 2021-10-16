<script>
    import { getContext } from 'svelte';
    import cssVars from 'svelte-css-vars';

    export let text = '';

    const { Theme } = getContext('theme');

    $: styleVars = {
      textColor: $Theme.theme.text,
      bgColor: $Theme.theme.background,
    };
</script>

<style>
    p {
        color: var(--textColor);
        background-color: var(--bgColor);
    }
</style>

<p use:cssVars={styleVars}>
    {text}
</p>