<script context="module">
  export const load = async ({ fetch, params }) => {
    const { slug } = params;
    const res = await fetch(`/posts/${slug}.json`);
    if (res.ok) {
      const { post } = await res.json();

      return {
        props: { post },
      };
    }
  };
</script>

<script>
  export let post;

  const { title, content, coverImage, author, tags, createdAt } =
    post.slug;
</script>

<svelte:head>
  <title>48W Blog | Welcome</title>
</svelte:head>

<div class="container flex-auto mt-20">
  <div class="flex justify-center">
    <article class="prose max-w-4xl ">
      <img class="rounded-xl shadow " src={coverImage} alt={title} />
      <h1 class="head-1 text-center">{title}</h1>
      <span class="flex-grow flex flex-col pl-4">
        <span class="title-font font-medium" />
        <span class="text-secondary text-xs tracking-widest mt-0.5"
          >{author}</span
        >
      </span>
      <p class="p-10">{content}</p>
    </article>
  </div>
</div>
