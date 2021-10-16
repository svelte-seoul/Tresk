<script>
    export let id;
    export let tasks;

    const { main, subTasks } = tasks[id.toString()];
</script>

{#if id !== 0}
    <p>{main}</p>
{/if}

{#each subTasks as taskId}
    <svelte:self id={taskId} {tasks}/>
{/each}
