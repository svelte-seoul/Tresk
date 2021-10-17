<script>
    import { taskStolage, inputField, selectedId } from '../state/store';
    import Button from '../uis/Button.svelte';

    const handleClick = () => {
      taskStolage.add($selectedId, $inputField);
      inputField.reset();
    };
</script>

<Button type='success' on:click={handleClick}>
  Add
</Button>
