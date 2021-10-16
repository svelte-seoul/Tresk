<script>
    import { taskStolage } from '../state/store';

    export let id;

    let main;
    let subTasks;

    $ : ({ main, subTasks } = $taskStolage[id.toString()]);
</script>

{#if id !== 0}
    <p>{main}</p>
{/if}

<ul>
    {#each subTasks as taskId}
        <li><svelte:self id={taskId}/></li>
    {/each}
</ul>
