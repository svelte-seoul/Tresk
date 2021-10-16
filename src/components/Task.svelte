<script>
    import { taskStolage } from '../state/store';
    import Typography from './Typography.svelte';

    export let id;

    let main;
    let subTasks;

    $ : ({ main, subTasks } = $taskStolage[id.toString()]);
</script>

{#if id !== 0}
    <Typography text={main}/>
{/if}

<ul>
    {#each subTasks as taskId}
        <li><svelte:self id={taskId}/></li>
    {/each}
</ul>
