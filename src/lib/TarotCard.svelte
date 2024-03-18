<script>
  import { fetchTarotCards, getCardImage } from './TarotCardFetch';

  export let numCards;

  let tarotCards = [];
</script>

<div>
  <label>
    Enter the number of cards you wish to draw!
    <br />
    <input type="number" bind:value={numCards} min="1" />
  </label>
</div>
