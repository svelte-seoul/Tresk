<script>
    import { taskStolage, inputField, selectedId } from '../state/store';
</script>

<button 
  type='button'
  on:click={() => taskStolage.add($selectedId, $inputField)}>
    Add
</button>
