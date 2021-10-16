<script>
    export let tag = 'p';
    export let text = '';

    const render = () => `<${tag}>${text}</${tag}>`;
</script>

<style>
    h1, h2, h3, h4, h5, h6, p, span {
        background-color: white;
        color: black
    }
</style>

{@html render()}
