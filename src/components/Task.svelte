<script>
    import { taskStolage } from '../state/store';

    export let id;

    const { main, subTasks } = $taskStolage[id.toString()];
</script>

{#if id !== 0}
    <p>{main}</p>
{/if}

{#each subTasks as taskId}
    <svelte:self id={taskId}/>
{/each}
