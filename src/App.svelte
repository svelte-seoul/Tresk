<script>
    import EditText from './components/EditText.svelte';
    import AddTask from './components/AddTask.svelte';
    import Task from './components/Task.svelte';
    import TextButton from './components/TextButton.svelte';

    import { selectedId } from './state/store';

    $: isSelected = $selectedId === 0;
    
    const handleClick = () => selectedId.set(0);
</script>

<TextButton {isSelected}  text='Tresk' onClick={handleClick}/>
<EditText/>
<AddTask/>
<Task id={0}/>