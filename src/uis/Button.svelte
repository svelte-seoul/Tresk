<style>
    button {
      background-color: var(--theme-paper);
      color: var(--theme-text);
  
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    button:hover {
      background-color: var(--theme-paper);
      color: var(--theme-text);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }

    .isSelected {
		color: var(--theme-info)
	}

    .text {
        padding: 0px;
        border: none;
        background: none;
        border-radius: 0px;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        background-color: var(--theme-background);
        color: var(--theme-text);
    }
  
    .primary {
      background-color: var(--theme-primary);
      color: white;
    }
  
    .secondary {
      background-color: var(--theme-secondary);
      color: white;
    }
  
    .success {
      background-color: var(--theme-success);
      color: white;
    }
  
    .danger {
      background-color: var(--theme-danger);
      color: white;
    }
  
    .loader {
      border: 2px solid var(--theme-background);
      border-top: 2px solid var(--theme-primary);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  
  <script lang="ts">
    import { createEventDispatcher } from 'svelte';

    type Type = 'primary' | 'secondary' | 'success' | 'danger'
    export let type: Type;
    export let disabled = false;
    export let loading = false;
    export let text = false;

    const dispatch = createEventDispatcher();

    function handleClick() {
      dispatch('click');
    }
</script>
  
<button
  class:text
  class={type}
  disabled={disabled}
  on:click={handleClick}
>
    {#if loading}
        <div class="loader" />
    {:else}
        <slot />
    {/if}
</button>
