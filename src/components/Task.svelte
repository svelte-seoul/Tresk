<script>
    export let main;
    export let subTasks = [];
</script>

<p>{main}</p>

{#each subTasks as {main, subTasks}}
    <svelte:self {main} {subTasks}/>
{/each}
