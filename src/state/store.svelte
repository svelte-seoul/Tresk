<script>
    import { writable } from 'svelte/store';

    import { add } from './reducers';

    const createTaskStolage = () => {
      const { subscribe, set, update } = writable({});

      return {
        subscribe,
        add: (incomming) => update((previous) => add(previous, incomming)),
        reset: () => set({}),
      };
    };

    export const taskStolage = createTaskStolage();
</script>
