<script>
    import { taskStolage, inputField } from '../state/store';
</script>

<!-- TODO: parent id need to be stored somewhere and replace 0 -->
<button 
  type='button'
  on:click={() => taskStolage.add(0, { main: $inputField, subTasks: [] })}>
    Add
</button>
