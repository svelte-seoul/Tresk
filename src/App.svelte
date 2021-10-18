<script>
    import { getContext } from 'svelte';
    import { selectedId } from './state/store';
    
    import BackGroundProvider from './components/BackGroundProvider.svelte';
    import Button from './uis/Button.svelte';
    import EditText from './components/EditText.svelte';
    import AddTask from './components/AddTask.svelte';
    import Task from './components/Task.svelte';

    const { toggle } = getContext('theme');

    $: isSelected = $selectedId === 0;
    
    const handleClick = () => selectedId.set(0);
</script>

<BackGroundProvider>
    <Button text type={isSelected ? 'secondary' : 'primary'} on:click={handleClick}>
        Tresk
    </Button>
    <Button type='success' on:click={toggle}>
        Toggle Theme
    </Button>
    <EditText/>
    <AddTask/>
    <Task id={0}/>
</BackGroundProvider>
