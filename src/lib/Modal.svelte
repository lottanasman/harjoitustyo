<script>
  import { fade, scale } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
</script>

<div class="backdrop" />

<div
  class="modal"
  in:scale={{ duration: 500, opacity: 0.5, start: 0.5, easing: sineIn }}
  out:scale
>
  <slot />
  <footer>
    <slot name="footer" />
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 70%;
    max-height: 80vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-image: url(/sininen.jpg);
    background-size: cover;
    z-index: 100;
    overflow: auto;
  }
</style>
