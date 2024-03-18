<script>
  import Modal from './Modal.svelte';
  import { fetchTarot, getCardImage } from './TarotCardFetch';
  import { createEventDispatcher } from 'svelte';

  export let showCardModal;

  const dispatch = createEventDispatcher();
  let tarotCards = [];

  async function fetchCards() {
    try {
      tarotCards = await fetchTarot();
      dispatch('avaa');
    } catch (error) {
      console.error('Error fetching tarot cards:', error);
    }
  }
</script>

<button on:click={fetchCards}>Browse all cards</button>

{#if showCardModal}
  <Modal>
    <div class="card"></div>
  </Modal>
{/if}
