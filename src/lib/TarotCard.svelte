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
      numCards = 1;
    } catch (error) {
      error = 'Error fetching tarot cards';
    }
  }

  function close() {
    showModal = false;
  }
</script>

<div>
  <label>
    Enter the number of cards you wish to draw!
    <br />
    <br />
    <input type="number" bind:value={numCards} min="1" />
  </label>
</div>

<button on:click={drawCards}>Draw Cards</button>

{#if showModal}
  <Modal>
    <div
      class="card"
      in:scale={{ duration: 500, opacity: 0.5, start: 0.5 }}
      out:fade
    >
      {#if tarotCards.length > 0}
        {#each tarotCards as card}
          <div class="tarotCard">
            <h1>{card.name}</h1>
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

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
  }
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Grenze+Gotisch:wght@100..900&display=swap');
  p {
    font-weight: bold;
    margin-bottom: 1em;
  }

  input {
    background-color: rgba(0, 0, 0, 0.397);
    height: 3em;
    width: 15%;
    border: #000000;
  }

  div {
    padding: 1em;
  }
</style>
