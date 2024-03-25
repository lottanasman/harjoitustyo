<script>
  import { fetchTarotCards, getCardImage } from './TarotCardFetch';
  import Modal from './Modal.svelte';
  import { fade, scale } from 'svelte/transition';

  export let numCards;

  let tarotCards = [];
  let showModal = false;

  async function drawCards() {
    try {
      tarotCards = await fetchTarotCards(numCards);
      showModal = true;
      numCards = null;
    } catch (error) {
      error = 'Error fetching tarot cards';
    }
  }

  function close() {
    showModal = false;
  }

  $: buttonDisabled = numCards !== null && numCards !== 0;
</script>

<div>
  <h4>Enter the number of cards you wish to draw!</h4>

  <input type="number" bind:value={numCards} placeholder="Enter number" />
</div>

<button disabled={!buttonDisabled} on:click={drawCards}>Draw Cards</button>

{#if showModal}
  <Modal>
    <div class="card">
      {#if tarotCards.length > 0}
        {#each tarotCards as card}
          <div class="tarotCard">
            <h2>{card.name}</h2>
            <img src={getCardImage(card.name_short)} alt={card.name} />
            <p>{card.desc}</p>
          </div>
        {/each}
      {:else}
        <div>Error fetching tarot cards</div>
      {/if}
    </div>
    <button slot="footer" on:click={close}>Close</button>
  </Modal>
{/if}

<style>
  .tarotCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 1em;
    text-align: justify;
    margin-bottom: 1em;
  }

  img {
    width: 17em;
    margin-bottom: 1em;
  }

  p {
    font-weight: bold;
    margin-bottom: 1em;
  }

  input {
    background-color: rgba(0, 0, 0, 0.397);
    height: 3em;
    width: 30%;
    border: #000000;
    text-align: center;
  }

  div {
    padding: 1em;
  }
</style>
