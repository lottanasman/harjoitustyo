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
    <div class="card">
      <h2>{tarotCards[currentCardIndex].name}</h2>
      <img
        src={getCardImage(tarotCards[currentCardIndex].name_short)}
        alt={tarotCards[currentCardIndex].name}
      />
      <!-- yllä oleva img tägin sisältö TEKOÄLYÄ -->

      <div class="text-container">
        <p>
          <strong>Tarot card description:</strong>
          {tarotCards[currentCardIndex].desc}
        </p>
        <p>
          <strong>Card meaning when drawn up:</strong>
          {tarotCards[currentCardIndex].meaning_up}
        </p>
        <p>
          <strong>Card meaning when drawn reversed:</strong>
          {tarotCards[currentCardIndex].meaning_rev}
        </p>
      </div>
    </div>
    <button slot="footer" on:click={sulje}>Close</button>
  </Modal>
{/if}

<style>
  .card {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 1em;
    text-align: center;
  }

  .card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1em;
  }
</style>
