<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    const onChange = (e) => {
      dispatch('change', e);
    };
</script>

<input on:input={onChange}/>