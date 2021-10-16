<script>
    export let text = '';
    export let onClick;
</script>

<style>
    button {
        padding: 0;
        border: none;
        background: none;
    }
    button:hover {
        font-weight: bold;
    }
</style>

<button type='button' on:click={onClick}>
    {text}
</button>
