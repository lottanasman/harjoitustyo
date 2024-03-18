<script>
  import Modal from './Modal.svelte';
  import { createEventDispatcher } from 'svelte';

  export let showCardModal;

  const dispatch = createEventDispatcher();
  let tarotCards = [];
</script>

{#if showCardModal}
  <Modal></Modal>
{/if}

<button>Browse all cards</button>
