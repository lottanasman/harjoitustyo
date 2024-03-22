<script>
  import TarotCard from './lib/TarotCard.svelte';
  import CardList from './lib/CardList.svelte';

  let numCards = 1;
  let showCardModal = false;

  window.addEventListener('sulje', sulje);

  function sulje() {
    showCardModal = false;
  }

  window.addEventListener('avaa', avaa);

  function avaa() {
    showCardModal = true;
  }
</script>

<main>
  <h1>Tarot Card Reader</h1>

  <TarotCard {numCards} />

  <CardList {showCardModal} on:sulje={sulje} on:avaa={avaa} />
</main>

<style>
  :global(body) {
    background-image: url('/sininen.jpg');
    background-size: cover;
  }
</style>
