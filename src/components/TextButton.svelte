<script>
    export let text = '';
    export let isSelected = false;
    export let onClick;
</script>

<style>
    button {
        padding: 0px;
        border: none;
        background: none;
        border-radius: 0px;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        background-color: var(--theme-background);
        color: var(--theme-text);
    }
    button:hover {
        font-weight: bold;
    }
    .isSelected {
		color: var(--theme-info)
	}
</style>

<button 
  class:isSelected
  type='button' 
  on:click={onClick}>
    {text}
</button>
