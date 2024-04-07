<script>
  import Modal from './Modal.svelte';
  import { fetchTarot, getCardImage } from './TarotCardFetch';
  import { createEventDispatcher } from 'svelte';

  export let showCardModal;

  const dispatch = createEventDispatcher();
  let tarotCards = [];
  let currentCardIndex = 0;
  let selectedCardName = '';

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

  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % tarotCards.length;
  }

  function prevCard() {
    currentCardIndex =
      (currentCardIndex - 1 + tarotCards.length) % tarotCards.length;
  }

  //Tämä funktio TEKOÄLYÄ!
  function goToCard() {
    currentCardIndex = tarotCards.findIndex(
      (card) => card.name === selectedCardName
    );
  }

  //Yllä oleva funktio tekoälyä! Alla olevassa käytetty hyödyksi samaa koodin pätkää osittain!

  $: {
    if (selectedCardName !== '') {
      currentCardIndex = tarotCards.findIndex(
        (card) => card.name === selectedCardName
      );
    }
  }
</script>

<button on:click={fetchCards}>Browse all cards</button>

{#if showCardModal}
  <Modal>
    <div class="card">
      <h2>{tarotCards[currentCardIndex].name}</h2>

      <!-- Alla tekoälyn sisältämää koodia -->
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

    <div class="nav-buttons">
      <button on:click={prevCard} disabled={currentCardIndex === 0}
        >Previous</button
      >
      <select bind:value={selectedCardName} on:change={goToCard}>
        <option value="">Select a card</option>
        {#each tarotCards as card}
          <option value={card.name}>{card.name}</option>
        {/each}
      </select>
      <button
        on:click={nextCard}
        disabled={currentCardIndex === tarotCards.length - 1}>Next</button
      >
    </div>
    <br />
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

  .nav-buttons {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
  }

  select {
    flex-grow: 1;
    margin: 0 1em;
    background-color: rgba(0, 0, 0, 0.575);
    border: #cccccc00;
    border-radius: 8px;
  }

  .text-container {
    text-align: justify;
    margin: 0 auto;
    max-width: 80%;
  }
</style>
