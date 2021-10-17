<script>
    import { selectedId, taskStolage } from '../state/store';
    import Button from '../uis/Button.svelte';

    export let id;

    let main;
    let subTasks;

    $ : ({ main, subTasks } = $taskStolage[id.toString()]);

    const handleClick = () => selectedId.set(id);

    $: isSelected = id === $selectedId;
</script>

{#if id !== 0}
    <Button text type={isSelected ? 'secondary' : 'primary'} on:click={handleClick}>
        {main}
    </Button>
{/if}

<ul>
    {#each subTasks as taskId (taskId)}
        <li><svelte:self id={taskId}/></li>
    {/each}
</ul>
