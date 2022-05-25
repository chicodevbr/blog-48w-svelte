<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/posts.json');
    if (res.ok) {
      const { posts } = await res.json();
      return {
        props: {
          posts,
        },
      };
    }
  };
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>48 W | Blog</title>
</svelte:head>

{#each posts.reverse() as { title, coverImage, slug }}
  <div class="card lg:card-side bg-base-100 shadow-xl m-2 md:m-24">
    <figure>
      <img
        class="rounded-xl h-96 xl:object-cover w-96 xl:h-full"
        src={coverImage}
        alt={`Cover image for ${title}`}
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>Some descriptions here</p>
      <div class="card-actions justify-end">
        <a href={`/posts/${slug}`} class="btn btn-secondary"
          >Read &rArr;</a
        >
      </div>
    </div>
  </div>
{/each}
