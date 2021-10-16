<script>
    import EditText from './components/EditText.svelte';
    import AddTask from './components/AddTask.svelte';
    import Task from './components/Task.svelte';

    import Typography from './components/Typography.svelte';
</script>

<Typography tag='h1' text='Tresk'/>
<EditText/>
<AddTask/>
<Task id={0}/>