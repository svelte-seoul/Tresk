<script>
    import { taskStolage, inputField, selectedId } from '../state/store';
    import Button from '../uis/Button.svelte';

    const handleClick = () => {
      const content = $inputField;

      if (content.length !== 0) {
        taskStolage.add($selectedId, $inputField);
      }
    
      inputField.reset();
    };
</script>

<Button type='success' on:click={handleClick}>
  Add
</Button>
