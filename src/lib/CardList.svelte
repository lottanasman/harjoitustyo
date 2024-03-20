<script>
  import Modal from './Modal.svelte';
  import { fetchTarot, getCardImage } from './TarotCardFetch';
  import { createEventDispatcher } from 'svelte';

  export let showCardModal;

  const dispatch = createEventDispatcher();
  let tarotCards = [];
  let currentCardIndex = 0;

  async function fetchCards() {
    try {
      tarotCards = await fetchTarot();
      dispatch('avaa');
    } catch (error) {
      console.error('Error fetching tarot cards:', error);
    }
  }

  function sulje() {
    dispatch('sulje');
  }
</script>

<button on:click={fetchCards}>Browse all cards</button>

{#if showCardModal}
  <Modal>
    <div class="card"></div>
    <h2>{tarotCards[currentCardIndex].name}</h2>
    <img
      src={getCardImage(tarotCards[currentCardIndex].name_short)}
      alt={tarotCards[currentCardIndex].name}
    />
    <!-- yllä oleva img tägin sisältö TEKOÄLYÄ -->
  </Modal>
{/if}
