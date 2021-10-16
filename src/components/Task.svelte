<script>
    import { selectedId, taskStolage } from '../state/store';
    import TextButton from './TextButton.svelte';

    export let id;

    let main;
    let subTasks;

    $ : ({ main, subTasks } = $taskStolage[id.toString()]);

    const handleClick = () => selectedId.set(id);
</script>

{#if id !== 0}
    <TextButton text={main} onClick={handleClick}/>
{/if}

<ul>
    {#each subTasks as taskId (taskId)}
        <li><svelte:self id={taskId}/></li>
    {/each}
</ul>
