<script>
    import { writable } from 'svelte/store';

    import { add, remove } from './reducers';

    const createTaskStolage = () => {
      const { subscribe, set, update } = writable({});

      return {
        subscribe,
        add: (incomming) => update((previous) => add(previous, incomming)),
        remove: (target) => update((previous) => remove(previous, target)),
        reset: () => set({}),
      };
    };

    export const taskStolage = createTaskStolage();
</script>
