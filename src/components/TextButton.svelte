<script>
    export let text = '';
    export let isSelected = false;
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
    .isSelected {
		color: red
	}
</style>

<button 
  class:isSelected
  type='button' 
  on:click={onClick}>
    {text}
</button>
