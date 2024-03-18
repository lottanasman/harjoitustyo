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
    flex-direction: column; /* Set the flex-direction to column to stack elements vertically */
    align-items: center;
    margin-bottom: 20px;
  }

  img {
    width: 17em; /* Adjust the width of the image to make it bigger */
    margin-bottom: 1em; /* Add some margin to separate the image from other details */
  }

  p {
    font-weight: bold; /* Make the name text bold */
    margin-bottom: 1em; /* Add some margin between the name and the image */
  }

  input {
    width: 10%;
  }

  div {
    padding: 2em;
  }
</style>
