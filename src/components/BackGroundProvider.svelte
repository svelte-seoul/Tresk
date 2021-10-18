<script>
    import { getContext } from 'svelte';

    const { Theme } = getContext('theme');

    $: document.body.style.background = $Theme.theme.background;
</script>

<slot></slot>
