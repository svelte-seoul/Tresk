<script>
    import { getContext } from 'svelte';
    import { selectedId } from './state/store';
    
    import TextButton from './components/TextButton.svelte';
    import EditText from './components/EditText.svelte';
    import AddTask from './components/AddTask.svelte';
    import Task from './components/Task.svelte';

    const { toggle } = getContext('theme');

    $: isSelected = $selectedId === 0;
    
    const handleClick = () => selectedId.set(0);
</script>

<TextButton {isSelected}  text='Tresk' onClick={handleClick}/>
<button type='button' on:click={toggle}>Toggle Theme</button>
<EditText/>
<AddTask/>
<Task id={0}/>