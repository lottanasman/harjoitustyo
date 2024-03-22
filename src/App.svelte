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

  h1 {
    font-family: 'Grenze Gotisch';
    font-optical-sizing: auto;
  }
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Grenze+Gotisch:wght@100..900&display=swap');
</style>
