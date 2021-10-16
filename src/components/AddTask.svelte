<script>
    import { taskStolage, inputField, selectedId } from '../state/store';
</script>

<button 
  type='button'
  on:click={() => taskStolage.add($selectedId, { main: $inputField, subTasks: [] })}>
    Add
</button>
