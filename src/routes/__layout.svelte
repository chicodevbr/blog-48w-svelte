<script>
  import '../app.css';
  import Nav from '../lib/nav.svelte';
</script>

<Nav />

<main class="container mx-auto px-4 xl:w-4/6">
  <slot />
</main>
