<script>
    import { getContext } from 'svelte';
    
    import Typography from './components/Typography.svelte';
    import EditText from './components/EditText.svelte';
    import AddTask from './components/AddTask.svelte';
    import Task from './components/Task.svelte';

    const { toggle } = getContext('theme');
</script>

<Typography text='Tresk'/>
<button type='button' on:click={toggle}>Toggle Theme</button>
<EditText/>
<AddTask/>
<Task id={0}/>
