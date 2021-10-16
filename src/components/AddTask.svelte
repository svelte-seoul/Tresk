<script>
    import { taskStolage, inputField, selectedId } from '../state/store';

    const handleClick = () => {
      taskStolage.add($selectedId, $inputField);
      inputField.reset();
    };
</script>

<button 
  type='button'
  on:click={handleClick}>
    Add
</button>
